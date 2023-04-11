import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { CurrencyEnum } from "./currencyenum";
import { CustomField } from "./customfield";
import { Email } from "./email";
import { EmploymentStatusEnum } from "./employmentstatusenum";
import { GenderEnum } from "./genderenum";
import { PaymentUnitEnum } from "./paymentunitenum";
import { PhoneNumber } from "./phonenumber";
/**
 * The FLSA status for this compensation.
 */
export declare enum EmployeeCompensationsFlsaStatusEnum {
    Exempt = "exempt",
    SalariedNonexempt = "salaried-nonexempt",
    Nonexempt = "nonexempt",
    Owner = "owner"
}
export declare class EmployeeCompensations extends SpeakeasyBase {
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    /**
     * The date on which a change to an employee's compensation takes effect.
     */
    effectiveDate?: string;
    /**
     * The FLSA status for this compensation.
     */
    flsaStatus?: EmployeeCompensationsFlsaStatusEnum;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * The ID of the job to which the compensation belongs.
     */
    jobId?: string;
    /**
     * Unit of measurement for employee compensation.
     */
    paymentUnit?: PaymentUnitEnum;
    /**
     * The amount paid per payment unit.
     */
    rate?: number;
}
/**
 * The work schedule of the employee.
 */
export declare enum EmployeeEmploymentRoleEmploymentSubTypeEnum {
    FullTime = "full_time",
    PartTime = "part_time",
    Hourly = "hourly"
}
/**
 * The type of employment relationship the employee has with the organization.
 */
export declare enum EmployeeEmploymentRoleEmploymentTypeEnum {
    Contractor = "contractor",
    Employee = "employee",
    Freelance = "freelance",
    Temp = "temp",
    Internship = "internship",
    Other = "other"
}
export declare class EmployeeEmploymentRole extends SpeakeasyBase {
    /**
     * The work schedule of the employee.
     */
    subType?: EmployeeEmploymentRoleEmploymentSubTypeEnum;
    /**
     * The type of employment relationship the employee has with the organization.
     */
    type?: EmployeeEmploymentRoleEmploymentTypeEnum;
}
export declare class EmployeeJobs extends SpeakeasyBase {
    /**
     * The rate of pay for the employee in their current job role.
     */
    compensationRate?: number;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    /**
     * A unique identifier for an object.
     */
    employeeId?: string;
    /**
     * The date on which the employee leaves or is expected to leave their current job role.
     */
    endDate?: Date;
    /**
     * The date on which the employee was hired by the organization
     */
    hiredAt?: Date;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * Indicates whether this the employee's primary job.
     */
    isPrimary?: boolean;
    location?: Address;
    /**
     * Unit of measurement for employee compensation.
     */
    paymentUnit?: PaymentUnitEnum;
    /**
     * The position and responsibilities of the person within the organization.
     */
    role?: string;
    /**
     * The date on which the employee starts working in their current job role.
     */
    startDate?: Date;
    /**
     * The job title of the person.
     */
    title?: string;
}
/**
 * The reason because the employment ended.
 */
export declare enum EmployeeLeavingReasonEnum {
    Dismissed = "dismissed",
    Resigned = "resigned",
    Redundancy = "redundancy",
    Other = "other"
}
export declare class EmployeeManager extends SpeakeasyBase {
    /**
     * The email address of the manager.
     */
    email?: string;
    /**
     * The employment status of the employee, indicating whether they are currently employed, inactive, terminated, or in another status.
     */
    employmentStatus?: EmploymentStatusEnum;
    /**
     * The first name of the person.
     */
    firstName?: string;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * The last name of the person.
     */
    lastName?: string;
    /**
     * The name of the manager, often a combination of their first and last names.
     */
    name?: string;
}
export declare class EmployeePerson extends SpeakeasyBase {
    birthday?: Date;
    deceasedOn?: Date;
    /**
     * The first name of the person.
     */
    firstName?: string;
    /**
     * The gender represents the gender identity of a person.
     */
    gender?: GenderEnum;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    initials?: string;
    /**
     * The last name of the person.
     */
    lastName?: string;
    /**
     * Middle name of the person.
     */
    middleName?: string;
}
export declare class EmployeeSocialLinks extends SpeakeasyBase {
    id?: string;
    type?: string;
    url: string;
}
/**
 * The team the person is currently in.
 */
export declare class EmployeeTeam extends SpeakeasyBase {
    /**
     * The unique identifier of the team.
     */
    id?: string;
    /**
     * The name of the team.
     */
    name?: string;
}
export declare class Employee extends SpeakeasyBase {
    addresses?: Address[];
    /**
     * The date of birth of the person.
     */
    birthday?: Date;
    /**
     * The unique identifier of the company.
     */
    companyId?: string;
    /**
     * The name of the company.
     */
    companyName?: string;
    compensations?: EmployeeCompensations[];
    /**
     * Country code according to ISO 3166-1 alpha-2.
     */
    countryOfBirth?: string;
    /**
     * The date and time when the object was created.
     */
    createdAt?: Date;
    /**
     * The user who created the object.
     */
    createdBy?: string;
    customFields?: CustomField[];
    /**
     * The date the person deceased.
     */
    deceasedOn?: Date;
    deleted?: boolean;
    /**
     * The department the person is currently in.
     */
    department?: string;
    /**
     * Unique identifier of the department ID this employee belongs to.
     */
    departmentId?: string;
    /**
     * A description of the object.
     */
    description?: string;
    /**
     * Indicate the employee's dietary preference.
     */
    dietaryPreference?: string;
    /**
     * The direct reports refer to the individuals who report directly to a person in the organizational hierarchy.
     */
    directReports?: string[];
    /**
     * The name used to display the employee, often a combination of their first and last names.
     */
    displayName?: string;
    /**
     * The division the person is currently in. Usually a collection of departments or teams or regions.
     */
    division?: string;
    /**
     * Unique identifier of the division this employee belongs to.
     */
    divisionId?: string;
    emails?: Email[];
    /**
     * An Employee Number, Employee ID or Employee Code, is a unique number that has been assigned to each individual staff member within a company.
     */
    employeeNumber?: string;
    /**
     * An End Date is the date that the employee ended working at the company
     */
    employmentEndDate?: string;
    employmentRole?: EmployeeEmploymentRole;
    /**
     * A Start Date is the date that the employee started working at the company
     */
    employmentStartDate?: string;
    /**
     * The employment status of the employee, indicating whether they are currently employed, inactive, terminated, or in another status.
     */
    employmentStatus?: EmploymentStatusEnum;
    /**
     * The first name of the person.
     */
    firstName?: string;
    /**
     * Indicate the employee's food allergies.
     */
    foodAllergies?: string[];
    /**
     * The gender represents the gender identity of a person.
     */
    gender?: GenderEnum;
    /**
     * A unique identifier for an object.
     */
    id: string;
    /**
     * The initials of the person, usually derived from their first, middle, and last names.
     */
    initials?: string;
    jobs?: EmployeeJobs[];
    languages?: string[];
    /**
     * The last name of the person.
     */
    lastName?: string;
    /**
     * The reason because the employment ended.
     */
    leavingReason?: EmployeeLeavingReasonEnum;
    manager?: EmployeeManager;
    /**
     * The marital status of the employee.
     */
    maritalStatus?: string;
    /**
     * Middle name of the person.
     */
    middleName?: string;
    nationalities?: string[];
    partner?: EmployeePerson;
    phoneNumbers?: PhoneNumber[];
    /**
     * The URL of the photo of a person.
     */
    photoUrl?: string;
    /**
     * language code according to ISO 639-1. For the United States - EN
     */
    preferredLanguage?: string;
    /**
     * The name the employee prefers to be addressed by, which may be different from their legal name.
     */
    preferredName?: string;
    /**
     * The preferred pronouns of the person.
     */
    pronouns?: string;
    recordUrl?: string;
    /**
     * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
     */
    rowVersion?: string;
    /**
     * A formal salutation for the person. For example, 'Mr', 'Mrs'
     */
    salutation?: string;
    socialLinks?: EmployeeSocialLinks[];
    /**
     * A unique identifier assigned by the government. This field is considered sensitive information and may be subject to special security and privacy restrictions.
     */
    socialSecurityNumber?: string;
    /**
     * When the employee is imported as a new hire, this field indicates what system (e.g. the name of the ATS) this employee was imported from.
     */
    source?: string;
    /**
     * Unique identifier of the employee in the system this employee was imported from (e.g. the ID in the ATS).
     */
    sourceId?: string;
    tags?: string[];
    taxCode?: string;
    taxId?: string;
    /**
     * The team the person is currently in.
     */
    team?: EmployeeTeam;
    /**
     * The time zone related to the resource. The value is a string containing a standard time zone identifier, e.g. Europe/London.
     */
    timezone?: string;
    /**
     * The job title of the person.
     */
    title?: string;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    /**
     * The user who last updated the object.
     */
    updatedBy?: string;
    /**
     * Indicates if the employee works from a remote location.
     */
    worksRemote?: boolean;
}
export declare class EmployeeCompensationsInput extends SpeakeasyBase {
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    /**
     * The date on which a change to an employee's compensation takes effect.
     */
    effectiveDate?: string;
    /**
     * The FLSA status for this compensation.
     */
    flsaStatus?: EmployeeCompensationsFlsaStatusEnum;
    /**
     * Unit of measurement for employee compensation.
     */
    paymentUnit?: PaymentUnitEnum;
    /**
     * The amount paid per payment unit.
     */
    rate?: number;
}
export declare class EmployeeJobsInput extends SpeakeasyBase {
    /**
     * The rate of pay for the employee in their current job role.
     */
    compensationRate?: number;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    /**
     * The date on which the employee leaves or is expected to leave their current job role.
     */
    endDate?: Date;
    /**
     * The date on which the employee was hired by the organization
     */
    hiredAt?: Date;
    /**
     * Indicates whether this the employee's primary job.
     */
    isPrimary?: boolean;
    location?: Address;
    /**
     * Unit of measurement for employee compensation.
     */
    paymentUnit?: PaymentUnitEnum;
    /**
     * The position and responsibilities of the person within the organization.
     */
    role?: string;
    /**
     * The date on which the employee starts working in their current job role.
     */
    startDate?: Date;
    /**
     * The job title of the person.
     */
    title?: string;
}
export declare class EmployeeManagerInput extends SpeakeasyBase {
    /**
     * The email address of the manager.
     */
    email?: string;
    /**
     * The employment status of the employee, indicating whether they are currently employed, inactive, terminated, or in another status.
     */
    employmentStatus?: EmploymentStatusEnum;
    /**
     * The first name of the person.
     */
    firstName?: string;
    /**
     * The last name of the person.
     */
    lastName?: string;
    /**
     * The name of the manager, often a combination of their first and last names.
     */
    name?: string;
}
export declare class EmployeePersonInput extends SpeakeasyBase {
    birthday?: Date;
    deceasedOn?: Date;
    /**
     * The first name of the person.
     */
    firstName?: string;
    /**
     * The gender represents the gender identity of a person.
     */
    gender?: GenderEnum;
    initials?: string;
    /**
     * The last name of the person.
     */
    lastName?: string;
    /**
     * Middle name of the person.
     */
    middleName?: string;
}
export declare class EmployeeInput extends SpeakeasyBase {
    addresses?: Address[];
    /**
     * The date of birth of the person.
     */
    birthday?: Date;
    /**
     * The unique identifier of the company.
     */
    companyId?: string;
    /**
     * The name of the company.
     */
    companyName?: string;
    compensations?: EmployeeCompensationsInput[];
    /**
     * Country code according to ISO 3166-1 alpha-2.
     */
    countryOfBirth?: string;
    customFields?: CustomField[];
    /**
     * The date the person deceased.
     */
    deceasedOn?: Date;
    deleted?: boolean;
    /**
     * The department the person is currently in.
     */
    department?: string;
    /**
     * Unique identifier of the department ID this employee belongs to.
     */
    departmentId?: string;
    /**
     * A description of the object.
     */
    description?: string;
    /**
     * Indicate the employee's dietary preference.
     */
    dietaryPreference?: string;
    /**
     * The direct reports refer to the individuals who report directly to a person in the organizational hierarchy.
     */
    directReports?: string[];
    /**
     * The name used to display the employee, often a combination of their first and last names.
     */
    displayName?: string;
    /**
     * The division the person is currently in. Usually a collection of departments or teams or regions.
     */
    division?: string;
    /**
     * Unique identifier of the division this employee belongs to.
     */
    divisionId?: string;
    emails?: Email[];
    /**
     * An Employee Number, Employee ID or Employee Code, is a unique number that has been assigned to each individual staff member within a company.
     */
    employeeNumber?: string;
    /**
     * An End Date is the date that the employee ended working at the company
     */
    employmentEndDate?: string;
    employmentRole?: EmployeeEmploymentRole;
    /**
     * A Start Date is the date that the employee started working at the company
     */
    employmentStartDate?: string;
    /**
     * The employment status of the employee, indicating whether they are currently employed, inactive, terminated, or in another status.
     */
    employmentStatus?: EmploymentStatusEnum;
    /**
     * The first name of the person.
     */
    firstName?: string;
    /**
     * Indicate the employee's food allergies.
     */
    foodAllergies?: string[];
    /**
     * The gender represents the gender identity of a person.
     */
    gender?: GenderEnum;
    /**
     * The initials of the person, usually derived from their first, middle, and last names.
     */
    initials?: string;
    jobs?: EmployeeJobsInput[];
    languages?: string[];
    /**
     * The last name of the person.
     */
    lastName?: string;
    /**
     * The reason because the employment ended.
     */
    leavingReason?: EmployeeLeavingReasonEnum;
    manager?: EmployeeManagerInput;
    /**
     * The marital status of the employee.
     */
    maritalStatus?: string;
    /**
     * Middle name of the person.
     */
    middleName?: string;
    nationalities?: string[];
    partner?: EmployeePersonInput;
    phoneNumbers?: PhoneNumber[];
    /**
     * The URL of the photo of a person.
     */
    photoUrl?: string;
    /**
     * language code according to ISO 639-1. For the United States - EN
     */
    preferredLanguage?: string;
    /**
     * The name the employee prefers to be addressed by, which may be different from their legal name.
     */
    preferredName?: string;
    /**
     * The preferred pronouns of the person.
     */
    pronouns?: string;
    recordUrl?: string;
    /**
     * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
     */
    rowVersion?: string;
    /**
     * A formal salutation for the person. For example, 'Mr', 'Mrs'
     */
    salutation?: string;
    socialLinks?: EmployeeSocialLinks[];
    /**
     * A unique identifier assigned by the government. This field is considered sensitive information and may be subject to special security and privacy restrictions.
     */
    socialSecurityNumber?: string;
    /**
     * When the employee is imported as a new hire, this field indicates what system (e.g. the name of the ATS) this employee was imported from.
     */
    source?: string;
    /**
     * Unique identifier of the employee in the system this employee was imported from (e.g. the ID in the ATS).
     */
    sourceId?: string;
    tags?: string[];
    taxCode?: string;
    taxId?: string;
    /**
     * The team the person is currently in.
     */
    team?: EmployeeTeam;
    /**
     * The time zone related to the resource. The value is a string containing a standard time zone identifier, e.g. Europe/London.
     */
    timezone?: string;
    /**
     * The job title of the person.
     */
    title?: string;
    /**
     * Indicates if the employee works from a remote location.
     */
    worksRemote?: boolean;
}
