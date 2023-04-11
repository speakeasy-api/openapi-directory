import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETListTemplatesActionEnum {
    ListTemplates = "ListTemplates"
}
export declare enum GETListTemplatesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETListTemplatesRequest extends SpeakeasyBase {
    action: GETListTemplatesActionEnum;
    /**
     * The maximum number of templates to return. This value must be at least 1 and less than or equal to 10. If you do not specify a value, or if you specify a value less than 1 or greater than 10, the operation will return up to 10 results.
     */
    maxItems?: number;
    /**
     * A token returned from a previous call to <code>ListTemplates</code> to indicate the position in the list of email templates.
     */
    nextToken?: string;
    version: GETListTemplatesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETListTemplatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
