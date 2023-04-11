import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateConfigurationSetTrackingOptionsActionEnum {
    CreateConfigurationSetTrackingOptions = "CreateConfigurationSetTrackingOptions"
}
export declare enum POSTCreateConfigurationSetTrackingOptionsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTCreateConfigurationSetTrackingOptionsRequest extends SpeakeasyBase {
    action: POSTCreateConfigurationSetTrackingOptionsActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateConfigurationSetTrackingOptionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateConfigurationSetTrackingOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
