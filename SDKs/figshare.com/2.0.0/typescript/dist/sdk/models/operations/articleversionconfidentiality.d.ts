import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArticleVersionConfidentialityRequest extends SpeakeasyBase {
    /**
     * Article Unique identifier
     */
    articleId: number;
    /**
     * Version Number
     */
    vNumber: number;
}
export declare class ArticleVersionConfidentialityResponse extends SpeakeasyBase {
    /**
     * OK. Confidentiality representation
     */
    articleConfidentiality?: shared.ArticleConfidentiality;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
