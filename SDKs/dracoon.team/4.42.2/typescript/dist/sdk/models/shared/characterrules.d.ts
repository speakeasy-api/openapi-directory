import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Characters which a password must contain:
 *
 * @remarks
 *
 * * `alpha` - at least one alphabetical character (`uppercase` OR `lowercase`)
 *
 * * `uppercase` - at least one uppercase character
 *
 * * `lowercase` - at least one lowercase character
 *
 * * `numeric` - at least one numeric character
 *
 * * `special` - at least one special character (letters and digits excluded)
 *
 * * `all` - combination of `uppercase`, `lowercase`, `numeric` and `special` (available only in request models)
 *
 * * `none` - none of the above
 */
export declare enum CharacterRulesMustContainCharactersEnum {
    Alpha = "alpha",
    Uppercase = "uppercase",
    Lowercase = "lowercase",
    Numeric = "numeric",
    Special = "special",
    All = "all",
    None = "none"
}
/**
 * Password character rules
 */
export declare class CharacterRules extends SpeakeasyBase {
    /**
     * Characters which a password must contain:
     *
     * @remarks
     *
     * * `alpha` - at least one alphabetical character (`uppercase` OR `lowercase`)
     *
     * * `uppercase` - at least one uppercase character
     *
     * * `lowercase` - at least one lowercase character
     *
     * * `numeric` - at least one numeric character
     *
     * * `special` - at least one special character (letters and digits excluded)
     *
     * * `all` - combination of `uppercase`, `lowercase`, `numeric` and `special` (available only in request models)
     *
     * * `none` - none of the above
     */
    mustContainCharacters: CharacterRulesMustContainCharactersEnum;
    /**
     * Number of characteristics to enforce
     *
     * @remarks
     *
     * e.g. from `["uppercase", "lowercase", "numeric", "special"]`
     *
     * all 4 character sets can be enforced; but also only 2 of them
     */
    numberOfCharacteristicsToEnforce: number;
}
