import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETSetIdentityFeedbackForwardingEnabledActionEnum {
    SetIdentityFeedbackForwardingEnabled = "SetIdentityFeedbackForwardingEnabled"
}
export declare enum GETSetIdentityFeedbackForwardingEnabledVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETSetIdentityFeedbackForwardingEnabledRequest extends SpeakeasyBase {
    action: GETSetIdentityFeedbackForwardingEnabledActionEnum;
    /**
     * Sets whether Amazon SES will forward bounce and complaint notifications as email. <code>true</code> specifies that Amazon SES will forward bounce and complaint notifications as email, in addition to any Amazon SNS topic publishing otherwise specified. <code>false</code> specifies that Amazon SES will publish bounce and complaint notifications only through Amazon SNS. This value can only be set to <code>false</code> when Amazon SNS topics are set for both <code>Bounce</code> and <code>Complaint</code> notification types.
     */
    forwardingEnabled: boolean;
    /**
     * The identity for which to set bounce and complaint notification forwarding. Examples: <code>user@example.com</code>, <code>example.com</code>.
     */
    identity: string;
    version: GETSetIdentityFeedbackForwardingEnabledVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETSetIdentityFeedbackForwardingEnabledResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
