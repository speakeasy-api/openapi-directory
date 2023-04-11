import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteConfigurationTemplateActionEnum {
    DeleteConfigurationTemplate = "DeleteConfigurationTemplate"
}
export declare enum POSTDeleteConfigurationTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTDeleteConfigurationTemplateRequest extends SpeakeasyBase {
    action: POSTDeleteConfigurationTemplateActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteConfigurationTemplateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteConfigurationTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
