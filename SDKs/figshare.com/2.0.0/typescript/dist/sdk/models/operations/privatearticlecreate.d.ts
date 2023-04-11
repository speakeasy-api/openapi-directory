import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateArticleCreateSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateArticleCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    /**
     * Created
     */
    locationWarnings?: shared.LocationWarnings;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
