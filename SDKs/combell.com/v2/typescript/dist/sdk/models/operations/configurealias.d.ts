import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConfigureAliasRequest extends SpeakeasyBase {
    /**
     * Contains the alias information.
     */
    updateAliasRequest?: shared.UpdateAliasRequest;
    /**
     * Automatically added
     */
    domainNamePathParameter: string;
    /**
     * Mail zone domain name.
     */
    domainNameQueryParameter: string;
    /**
     * Automatically added
     */
    emailAddressPathParameter: string;
    /**
     * Alias e-mail address.
     */
    emailAddressQueryParameter: string;
}
export declare class ConfigureAliasResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
