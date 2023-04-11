import { SpeakeasyBase } from "../../../internal/utils";
import { JsonTokenTypeConfiguration } from "./jsontokentypeconfiguration";
import { JwtTokenTypeConfiguration } from "./jwttokentypeconfiguration";
/**
 * Provides the configuration information for a token.
 */
export declare class UserTokenConfiguration extends SpeakeasyBase {
    jsonTokenTypeConfiguration?: JsonTokenTypeConfiguration;
    jwtTokenTypeConfiguration?: JwtTokenTypeConfiguration;
}
