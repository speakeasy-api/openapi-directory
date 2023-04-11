import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTUpdateConfigurationTemplateActionEnum {
    UpdateConfigurationTemplate = "UpdateConfigurationTemplate"
}
export declare enum POSTUpdateConfigurationTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTUpdateConfigurationTemplateRequest extends SpeakeasyBase {
    action: POSTUpdateConfigurationTemplateActionEnum;
    requestBody?: Uint8Array;
    version: POSTUpdateConfigurationTemplateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTUpdateConfigurationTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
