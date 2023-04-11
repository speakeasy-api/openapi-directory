import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTValidateTemplateActionEnum {
    ValidateTemplate = "ValidateTemplate"
}
export declare enum POSTValidateTemplateVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTValidateTemplateRequest extends SpeakeasyBase {
    action: POSTValidateTemplateActionEnum;
    requestBody?: Uint8Array;
    version: POSTValidateTemplateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTValidateTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
