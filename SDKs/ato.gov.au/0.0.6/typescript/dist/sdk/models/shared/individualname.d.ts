import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The direction used to render the individual's name.
 */
export declare enum IndividualNameDirectionEnum {
    LeftToRight = "left-to-right",
    RightToLeft = "right-to-left"
}
/**
 * The individual's name prefix.
 */
export declare enum IndividualNameNamePrefixEnum {
    Mr = "Mr",
    Ms = "Ms"
}
/**
 * The name type.
 */
export declare enum IndividualNameNameTypeEnum {
    Alias = "Alias",
    PrincipalName = "Principal Name"
}
/**
 * The Individual Name resource.
 */
export declare class IndividualNameInput extends SpeakeasyBase {
    /**
     * The direction used to render the individual's name.
     */
    direction?: IndividualNameDirectionEnum;
    /**
     * The individual's family name.
     */
    familyName?: string;
    /**
     * The individual's formal salutation, for example, "Mr William Smith".
     */
    formalSalutation?: string;
    /**
     * The individual's given name.
     */
    givenName?: string;
    /**
     * The individual's informal salutation, for example, "Bill".
     */
    informalSalutation?: string;
    /**
     * The individual's middle name.
     */
    middleName?: string;
    /**
     * The individual's name prefix.
     */
    namePrefix?: IndividualNameNamePrefixEnum;
    /**
     * The individual's name suffix, for example, "Jr" or "Sr".
     */
    nameSuffix?: string;
    /**
     * The name type.
     */
    nameType?: IndividualNameNameTypeEnum;
}
/**
 * The Individual Name resource.
 */
export declare class IndividualName extends SpeakeasyBase {
    /**
     * The direction used to render the individual's name.
     */
    direction?: IndividualNameDirectionEnum;
    /**
     * The individual's family name.
     */
    familyName?: string;
    /**
     * The individual's formal salutation, for example, "Mr William Smith".
     */
    formalSalutation?: string;
    /**
     * The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
     */
    fromDate?: Date;
    /**
     * The individual's given name.
     */
    givenName?: string;
    /**
     * The resource's unique identifier.
     */
    id?: string;
    /**
     * The individual's informal salutation, for example, "Bill".
     */
    informalSalutation?: string;
    /**
     * The individual's middle name.
     */
    middleName?: string;
    /**
     * The individual's name prefix.
     */
    namePrefix?: IndividualNameNamePrefixEnum;
    /**
     * The individual's name suffix, for example, "Jr" or "Sr".
     */
    nameSuffix?: string;
    /**
     * The name type.
     */
    nameType?: IndividualNameNameTypeEnum;
    /**
     * The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
     */
    toDate?: Date;
}
