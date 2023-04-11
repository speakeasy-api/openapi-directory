import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTValidateConfigurationSettingsActionEnum {
    ValidateConfigurationSettings = "ValidateConfigurationSettings"
}
export declare enum POSTValidateConfigurationSettingsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTValidateConfigurationSettingsRequest extends SpeakeasyBase {
    action: POSTValidateConfigurationSettingsActionEnum;
    requestBody?: Uint8Array;
    version: POSTValidateConfigurationSettingsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTValidateConfigurationSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
