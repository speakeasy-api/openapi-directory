import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETTestRenderTemplateActionEnum {
    TestRenderTemplate = "TestRenderTemplate"
}
export declare enum GETTestRenderTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETTestRenderTemplateRequest extends SpeakeasyBase {
    action: GETTestRenderTemplateActionEnum;
    /**
     * A list of replacement values to apply to the template. This parameter is a JSON object, typically consisting of key-value pairs in which the keys correspond to replacement tags in the email template.
     */
    templateData: string;
    /**
     * The name of the template that you want to render.
     */
    templateName: string;
    version: GETTestRenderTemplateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETTestRenderTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
