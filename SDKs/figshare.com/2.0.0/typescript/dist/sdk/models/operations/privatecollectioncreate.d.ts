import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateCollectionCreateSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateCollectionCreateResponse extends SpeakeasyBase {
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
