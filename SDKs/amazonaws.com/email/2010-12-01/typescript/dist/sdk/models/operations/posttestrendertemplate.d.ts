import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTTestRenderTemplateActionEnum {
    TestRenderTemplate = "TestRenderTemplate"
}
export declare enum POSTTestRenderTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTTestRenderTemplateRequest extends SpeakeasyBase {
    action: POSTTestRenderTemplateActionEnum;
    requestBody?: Uint8Array;
    version: POSTTestRenderTemplateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTTestRenderTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
