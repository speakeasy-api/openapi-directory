import { SpeakeasyBase } from "../../../internal/utils";
import { OAuth2Specification } from "./oauth2specification";
export declare enum DestinationAuthSpecificationAuthTypeEnum {
    Oauth20 = "oauth2.0"
}
export declare class DestinationAuthSpecification extends SpeakeasyBase {
    authType?: DestinationAuthSpecificationAuthTypeEnum;
    /**
     * An object containing any metadata needed to describe this connector's Oauth flow
     */
    oauth2Specification?: OAuth2Specification;
}
