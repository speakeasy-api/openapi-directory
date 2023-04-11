import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCreateTemplateActionEnum {
    CreateTemplate = "CreateTemplate"
}
/**
 * The content of the email, composed of a subject line, an HTML part, and a text-only part.
 */
export declare class GETCreateTemplateTemplate extends SpeakeasyBase {
    htmlPart?: string;
    subjectPart?: string;
    templateName: string;
    textPart?: string;
}
export declare enum GETCreateTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETCreateTemplateRequest extends SpeakeasyBase {
    action: GETCreateTemplateActionEnum;
    /**
     * The content of the email, composed of a subject line, an HTML part, and a text-only part.
     */
    template: GETCreateTemplateTemplate;
    version: GETCreateTemplateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCreateTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
