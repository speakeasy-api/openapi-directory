import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateConfigurationTemplateActionEnum {
    CreateConfigurationTemplate = "CreateConfigurationTemplate"
}
export declare enum POSTCreateConfigurationTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTCreateConfigurationTemplateRequest extends SpeakeasyBase {
    action: POSTCreateConfigurationTemplateActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateConfigurationTemplateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateConfigurationTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
