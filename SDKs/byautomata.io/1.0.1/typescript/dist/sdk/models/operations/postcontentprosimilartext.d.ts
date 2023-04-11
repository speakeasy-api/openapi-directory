import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * We'll provide information about related companies and articles based on the text you provide.
 */
export declare class PostContentproSimilarTextRequestBody extends SpeakeasyBase {
    /**
     * Any piece of text
     */
    text: string;
}
export declare class PostContentproSimilarText200ApplicationJSONData extends SpeakeasyBase {
    article?: shared.Article;
    company?: shared.ContentProCompany;
    snippets?: shared.ContentProSnippets;
}
/**
 * A successful operation
 */
export declare class PostContentproSimilarText200ApplicationJSON extends SpeakeasyBase {
    callsPerMonth?: string;
    countRemaining?: string;
    data?: PostContentproSimilarText200ApplicationJSONData[];
    renewalDate?: string;
}
export declare class PostContentproSimilarTextResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A successful operation
     */
    postContentproSimilarText200ApplicationJSONObject?: PostContentproSimilarText200ApplicationJSON;
}
