import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateTemplateActionEnum {
    CreateTemplate = "CreateTemplate"
}
export declare enum POSTCreateTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTCreateTemplateRequest extends SpeakeasyBase {
    action: POSTCreateTemplateActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateTemplateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
