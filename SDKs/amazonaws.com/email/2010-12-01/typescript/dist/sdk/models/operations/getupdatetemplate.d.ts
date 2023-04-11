import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETUpdateTemplateActionEnum {
    UpdateTemplate = "UpdateTemplate"
}
/**
 * The content of the email, composed of a subject line, an HTML part, and a text-only part.
 */
export declare class GETUpdateTemplateTemplate extends SpeakeasyBase {
    htmlPart?: string;
    subjectPart?: string;
    templateName: string;
    textPart?: string;
}
export declare enum GETUpdateTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETUpdateTemplateRequest extends SpeakeasyBase {
    action: GETUpdateTemplateActionEnum;
    /**
     * The content of the email, composed of a subject line, an HTML part, and a text-only part.
     */
    template: GETUpdateTemplateTemplate;
    version: GETUpdateTemplateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETUpdateTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
