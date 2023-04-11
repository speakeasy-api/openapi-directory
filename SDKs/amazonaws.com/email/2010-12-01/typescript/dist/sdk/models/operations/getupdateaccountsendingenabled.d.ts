import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETUpdateAccountSendingEnabledActionEnum {
    UpdateAccountSendingEnabled = "UpdateAccountSendingEnabled"
}
export declare enum GETUpdateAccountSendingEnabledVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETUpdateAccountSendingEnabledRequest extends SpeakeasyBase {
    action: GETUpdateAccountSendingEnabledActionEnum;
    /**
     * Describes whether email sending is enabled or disabled for your Amazon SES account in the current AWS Region.
     */
    enabled?: boolean;
    version: GETUpdateAccountSendingEnabledVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETUpdateAccountSendingEnabledResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
