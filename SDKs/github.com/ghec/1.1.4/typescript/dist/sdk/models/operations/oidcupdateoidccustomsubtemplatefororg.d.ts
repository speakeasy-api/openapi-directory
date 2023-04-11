import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OidcUpdateOidcCustomSubTemplateForOrgRequest extends SpeakeasyBase {
    oidcCustomSub: shared.OidcCustomSub;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
}
export declare class OidcUpdateOidcCustomSubTemplateForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Empty response
     */
    emptyObject?: Record<string, any>;
}
