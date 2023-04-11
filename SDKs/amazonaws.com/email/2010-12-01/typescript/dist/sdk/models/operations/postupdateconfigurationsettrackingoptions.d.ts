import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTUpdateConfigurationSetTrackingOptionsActionEnum {
    UpdateConfigurationSetTrackingOptions = "UpdateConfigurationSetTrackingOptions"
}
export declare enum POSTUpdateConfigurationSetTrackingOptionsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTUpdateConfigurationSetTrackingOptionsRequest extends SpeakeasyBase {
    action: POSTUpdateConfigurationSetTrackingOptionsActionEnum;
    requestBody?: Uint8Array;
    version: POSTUpdateConfigurationSetTrackingOptionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTUpdateConfigurationSetTrackingOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
