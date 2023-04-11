import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
export declare class UserInput extends SpeakeasyBase {
    addresses?: Address[];
    /**
     * The name of the company.
     */
    companyName?: string;
    /**
     * The department the person is currently in.
     */
    department?: string;
    /**
     * A description of the object.
     */
    description?: string;
    /**
     * The division the person is currently in. Usually a collection of departments or teams or regions.
     */
    division?: string;
    emails: Email[];
    /**
     * An Employee Number, Employee ID or Employee Code, is a unique number that has been assigned to each individual staff member within a company.
     */
    employeeNumber?: string;
    /**
     * The first name of the person.
     */
    firstName?: string;
    image?: string;
    /**
     * language code according to ISO 639-1. For the United States - EN
     */
    language?: string;
    /**
     * The last name of the person.
     */
    lastName?: string;
    parentId?: string;
    password?: string;
    phoneNumbers?: PhoneNumber[];
    status?: string;
    /**
     * The job title of the person.
     */
    title?: string;
    username?: string;
}
export declare class UserOutput extends SpeakeasyBase {
    addresses?: Address[];
    /**
     * The name of the company.
     */
    companyName?: string;
    createdAt?: string;
    /**
     * The department the person is currently in.
     */
    department?: string;
    /**
     * A description of the object.
     */
    description?: string;
    /**
     * The division the person is currently in. Usually a collection of departments or teams or regions.
     */
    division?: string;
    emails: Email[];
    /**
     * An Employee Number, Employee ID or Employee Code, is a unique number that has been assigned to each individual staff member within a company.
     */
    employeeNumber?: string;
    /**
     * The first name of the person.
     */
    firstName?: string;
    id?: string;
    image?: string;
    /**
     * language code according to ISO 639-1. For the United States - EN
     */
    language?: string;
    /**
     * The last name of the person.
     */
    lastName?: string;
    parentId?: string;
    phoneNumbers?: PhoneNumber[];
    status?: string;
    /**
     * The job title of the person.
     */
    title?: string;
    updatedAt?: string;
    username?: string;
}
