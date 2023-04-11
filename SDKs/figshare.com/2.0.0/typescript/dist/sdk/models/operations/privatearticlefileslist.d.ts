import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateArticleFilesListSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateArticleFilesListRequest extends SpeakeasyBase {
    /**
     * Article unique identifier
     */
    articleId: number;
}
export declare class PrivateArticleFilesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    /**
     * OK. Article files list
     */
    privateFiles?: shared.PrivateFile[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
