import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteTemplateActionEnum {
    DeleteTemplate = "DeleteTemplate"
}
export declare enum GETDeleteTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETDeleteTemplateRequest extends SpeakeasyBase {
    action: GETDeleteTemplateActionEnum;
    /**
     * The name of the template to be deleted.
     */
    templateName: string;
    version: GETDeleteTemplateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
