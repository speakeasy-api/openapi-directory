import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAttachVerifiedAccessTrustProviderActionEnum {
    AttachVerifiedAccessTrustProvider = "AttachVerifiedAccessTrustProvider"
}
export declare enum GETAttachVerifiedAccessTrustProviderVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETAttachVerifiedAccessTrustProviderRequest extends SpeakeasyBase {
    action: GETAttachVerifiedAccessTrustProviderActionEnum;
    /**
     * A unique, case-sensitive token that you provide to ensure idempotency of your modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.
     */
    clientToken?: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the Amazon Web Services Verified Access instance.
     */
    verifiedAccessInstanceId: string;
    /**
     * The ID of the Amazon Web Services Verified Access trust provider.
     */
    verifiedAccessTrustProviderId: string;
    version: GETAttachVerifiedAccessTrustProviderVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAttachVerifiedAccessTrustProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
