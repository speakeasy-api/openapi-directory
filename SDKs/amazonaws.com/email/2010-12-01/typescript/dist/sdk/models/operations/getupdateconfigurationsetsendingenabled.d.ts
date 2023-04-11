import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETUpdateConfigurationSetSendingEnabledActionEnum {
    UpdateConfigurationSetSendingEnabled = "UpdateConfigurationSetSendingEnabled"
}
export declare enum GETUpdateConfigurationSetSendingEnabledVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETUpdateConfigurationSetSendingEnabledRequest extends SpeakeasyBase {
    action: GETUpdateConfigurationSetSendingEnabledActionEnum;
    /**
     * The name of the configuration set that you want to update.
     */
    configurationSetName: string;
    /**
     * Describes whether email sending is enabled or disabled for the configuration set.
     */
    enabled: boolean;
    version: GETUpdateConfigurationSetSendingEnabledVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETUpdateConfigurationSetSendingEnabledResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
