import { SpeakeasyBase } from "../../../internal/utils";
import { ElectronicAddress, ElectronicAddressInput } from "./electronicaddress";
import { IndividualAddress, IndividualAddressInput } from "./individualaddress";
import { IndividualName, IndividualNameInput } from "./individualname";
/**
 * The individual's gender.
 */
export declare enum IndividualGenderEnum {
    Female = "Female",
    Male = "Male",
    NotApplicable = "Not Applicable",
    NotKnown = "Not Known"
}
/**
 * The Individual resource.
 */
export declare class IndividualInput extends SpeakeasyBase {
    addresses?: IndividualAddressInput[];
    /**
     * The individual's date of birth, for example, `1979-01-13` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format).
     */
    dateOfBirth: Date;
    electronicAddresses?: ElectronicAddressInput[];
    /**
     * The individual's gender.
     */
    gender?: IndividualGenderEnum;
    names?: IndividualNameInput[];
    /**
     * The individual's place of birth, for example, `Tamworth`.
     */
    placeOfBirth: string;
}
/**
 * The Individual resource.
 */
export declare class Individual extends SpeakeasyBase {
    addresses?: IndividualAddress[];
    /**
     * The individual's date of birth, for example, `1979-01-13` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format).
     */
    dateOfBirth: Date;
    electronicAddresses?: ElectronicAddress[];
    /**
     * The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
     */
    fromDate?: Date;
    /**
     * The individual's gender.
     */
    gender?: IndividualGenderEnum;
    /**
     * The party's unique identifier.
     */
    id?: string;
    names?: IndividualName[];
    /**
     * The individual's place of birth, for example, `Tamworth`.
     */
    placeOfBirth: string;
    /**
     * The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
     */
    toDate?: Date;
}
