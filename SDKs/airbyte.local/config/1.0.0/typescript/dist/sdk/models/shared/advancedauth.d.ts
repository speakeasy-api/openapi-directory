import { SpeakeasyBase } from "../../../internal/utils";
import { OAuthConfigSpecification } from "./oauthconfigspecification";
export declare enum AdvancedAuthAuthFlowTypeEnum {
    Oauth20 = "oauth2.0",
    Oauth10 = "oauth1.0"
}
export declare class AdvancedAuth extends SpeakeasyBase {
    authFlowType?: AdvancedAuthAuthFlowTypeEnum;
    oauthConfigSpecification?: OAuthConfigSpecification;
    /**
     * Json Path to a field in the connectorSpecification that should exist for the advanced auth to be applicable.
     */
    predicateKey?: string[];
    /**
     * Value of the predicate_key fields for the advanced auth to be applicable.
     */
    predicateValue?: string;
}
