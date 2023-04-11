import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the alias information.
 */
export declare class CreateAliasRequest extends SpeakeasyBase {
    /**
     * The alias destination e-mail addresses
     */
    destinations?: string[];
    /**
     * The alias e-mail
     */
    emailAddress?: string;
}
