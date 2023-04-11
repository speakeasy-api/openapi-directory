import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateArticleRequest extends SpeakeasyBase {
    article?: shared.Article;
    /**
     * The ID of the user to unpublish.
     */
    id: number;
}
export declare class UpdateArticleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
