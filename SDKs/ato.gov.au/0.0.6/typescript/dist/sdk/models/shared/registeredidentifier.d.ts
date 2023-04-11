import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The registered identifier type.
 */
export declare enum RegisteredIdentifierIdentifierTypeEnum {
    Acn = "ACN",
    Abn = "ABN"
}
/**
 * The Registered Identifier resource.
 */
export declare class RegisteredIdentifierInput extends SpeakeasyBase {
    /**
     * The registered identifier.
     */
    identifier?: string;
    /**
     * The registered identifier type.
     */
    identifierType?: RegisteredIdentifierIdentifierTypeEnum;
}
/**
 * The Registered Identifier resource.
 */
export declare class RegisteredIdentifier extends SpeakeasyBase {
    /**
     * The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
     */
    fromDate?: Date;
    /**
     * The resource's unique identifier.
     */
    id?: string;
    /**
     * The registered identifier.
     */
    identifier?: string;
    /**
     * The registered identifier type.
     */
    identifierType?: RegisteredIdentifierIdentifierTypeEnum;
    /**
     * The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
     */
    toDate?: Date;
}
