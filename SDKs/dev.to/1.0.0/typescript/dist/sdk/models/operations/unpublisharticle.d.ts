import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UnpublishArticleRequest extends SpeakeasyBase {
    /**
     * The ID of the article to unpublish.
     */
    id: number;
    /**
     * Content for the note that's created along with unpublishing
     */
    note?: string;
}
export declare class UnpublishArticleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
