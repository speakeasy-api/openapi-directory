import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OidcGetOidcCustomSubTemplateForOrgRequest extends SpeakeasyBase {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
}
export declare class OidcGetOidcCustomSubTemplateForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A JSON serialized template for OIDC subject claim customization
     */
    oidcCustomSub?: shared.OidcCustomSub;
}
