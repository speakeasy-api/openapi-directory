import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateAuthorsSearchSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateAuthorsSearchResponse extends SpeakeasyBase {
    /**
     * OK. An array of authors
     */
    authors?: shared.Author[];
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
