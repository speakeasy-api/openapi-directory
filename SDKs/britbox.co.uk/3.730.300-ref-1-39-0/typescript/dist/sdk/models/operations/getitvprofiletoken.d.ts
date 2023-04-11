import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetItvProfileTokenSecurity extends SpeakeasyBase {
    accountAuth: string;
}
export declare class GetItvProfileTokenRequest extends SpeakeasyBase {
    /**
     * Details of token request.
     */
    itvProfileTokenRequest: shared.ItvProfileTokenRequest;
    /**
     * Language code for the preferred language to be returned in the response.
     *
     * @remarks
     *
     * Parameter value is case-insensitive and should be
     *   - a valid 2 letter language code without region such as en, de
     *   - or with region such as en_us, en_au
     *
     * If undefined then defaults to 'en', unless the server has been configured
     * with a custom default.
     *
     * See https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
     *
     */
    lang?: string;
}
export declare class GetItvProfileTokenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The ITV profile token.
     */
    itvProfileToken?: shared.ItvProfileToken;
    /**
     * Bad request.
     */
    serviceError?: shared.ServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
