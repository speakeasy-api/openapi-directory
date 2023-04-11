import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateCollectionsSearchSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateCollectionsSearchResponse extends SpeakeasyBase {
    /**
     * OK. An array of collections
     */
    collections?: shared.Collection[];
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
