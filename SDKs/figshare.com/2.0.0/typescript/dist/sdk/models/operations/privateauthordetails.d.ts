import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateAuthorDetailsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateAuthorDetailsRequest extends SpeakeasyBase {
    /**
     * Author unique identifier
     */
    authorId: number;
}
export declare class PrivateAuthorDetailsResponse extends SpeakeasyBase {
    /**
     * OK. Article representation
     */
    authorComplete?: shared.AuthorComplete;
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
