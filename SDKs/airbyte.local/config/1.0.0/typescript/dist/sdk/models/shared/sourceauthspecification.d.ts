import { SpeakeasyBase } from "../../../internal/utils";
import { OAuth2Specification } from "./oauth2specification";
export declare enum SourceAuthSpecificationAuthTypeEnum {
    Oauth20 = "oauth2.0"
}
export declare class SourceAuthSpecification extends SpeakeasyBase {
    authType?: SourceAuthSpecificationAuthTypeEnum;
    /**
     * An object containing any metadata needed to describe this connector's Oauth flow
     */
    oauth2Specification?: OAuth2Specification;
}
