import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGETTemplateActionEnum {
    GetTemplate = "GetTemplate"
}
export declare enum GETGETTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETGETTemplateRequest extends SpeakeasyBase {
    action: GETGETTemplateActionEnum;
    /**
     * The name of the template you want to retrieve.
     */
    templateName: string;
    version: GETGETTemplateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETGETTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
