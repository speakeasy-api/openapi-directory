import { SpeakeasyBase } from "../../../internal/utils";
import { ElectronicAddress, ElectronicAddressInput } from "./electronicaddress";
import { OrganisationAddress, OrganisationAddressInput } from "./organisationaddress";
import { OrganisationName, OrganisationNameInput } from "./organisationname";
import { RegisteredIdentifier, RegisteredIdentifierInput } from "./registeredidentifier";
/**
 * The organisation's legal entity type.
 */
export declare enum OrganisationLegalEntityTypeEnum {
    Company = "Company",
    Partnership = "Partnership",
    Trust = "Trust",
    JointVenture = "Joint Venture"
}
/**
 * The Organisation resource.
 */
export declare class OrganisationInput extends SpeakeasyBase {
    addresses?: OrganisationAddressInput[];
    electronicAddresses?: ElectronicAddressInput[];
    /**
     * The organisation's establishment date, for example, `1928-03-03` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format).
     */
    establishmentDate: Date;
    /**
     * The organisation's legal entity type.
     */
    legalEntityType: OrganisationLegalEntityTypeEnum;
    names?: OrganisationNameInput[];
    registeredIdentifiers?: RegisteredIdentifierInput[];
}
/**
 * The Organisation resource.
 */
export declare class Organisation extends SpeakeasyBase {
    addresses?: OrganisationAddress[];
    electronicAddresses?: ElectronicAddress[];
    /**
     * The organisation's establishment date, for example, `1928-03-03` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format).
     */
    establishmentDate: Date;
    /**
     * The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
     */
    fromDate?: Date;
    /**
     * The party's unique identifier.
     */
    id?: string;
    /**
     * The organisation's legal entity type.
     */
    legalEntityType: OrganisationLegalEntityTypeEnum;
    names?: OrganisationName[];
    registeredIdentifiers?: RegisteredIdentifier[];
    /**
     * The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
     */
    toDate?: Date;
}
