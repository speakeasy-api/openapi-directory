import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateArticleConfidentialityUpdateSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateArticleConfidentialityUpdateRequest extends SpeakeasyBase {
    confidentialityCreator: shared.ConfidentialityCreator;
    /**
     * Article unique identifier
     */
    articleId: number;
}
export declare class PrivateArticleConfidentialityUpdateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
