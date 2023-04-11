import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetTemplateActionEnum {
    GetTemplate = "GetTemplate"
}
export declare enum POSTGetTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTGetTemplateRequest extends SpeakeasyBase {
    action: POSTGetTemplateActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetTemplateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
