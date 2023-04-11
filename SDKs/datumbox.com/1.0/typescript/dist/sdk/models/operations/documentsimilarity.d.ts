import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DocumentSimilarityRequestBody extends SpeakeasyBase {
    /**
     * Your API Key
     */
    apiKey: string;
    /**
     * The second text. It should not contain HTML tags.
     */
    copy?: string;
    /**
     * The first text. It should not contain HTML tags.
     */
    original?: string;
}
export declare class DocumentSimilarityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
