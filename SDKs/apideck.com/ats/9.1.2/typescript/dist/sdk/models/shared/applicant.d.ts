import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { CustomField } from "./customfield";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
export declare class ApplicantSocialLinks extends SpeakeasyBase {
    id?: string;
    type?: string;
    url: string;
}
export declare enum ApplicantWebsitesTypeEnum {
    Primary = "primary",
    Secondary = "secondary",
    Work = "work",
    Personal = "personal",
    Other = "other"
}
export declare class ApplicantWebsites extends SpeakeasyBase {
    id?: string;
    type?: ApplicantWebsitesTypeEnum;
    url: string;
}
export declare class Applicant extends SpeakeasyBase {
    addresses?: Address[];
    anonymized?: boolean;
    applications?: string[];
    archived?: boolean;
    /**
     * The date of birth of the person.
     */
    birthday?: Date;
    confidential?: boolean;
    coordinatorId?: string;
    coverLetter?: string;
    /**
     * The date and time when the object was created.
     */
    createdAt?: Date;
    /**
     * The user who created the object.
     */
    createdBy?: string;
    customFields?: CustomField[];
    cvUrl?: string;
    deleted?: boolean;
    /**
     * The time at which the object was deleted.
     */
    deletedAt?: Date;
    /**
     * The user who deleted the object.
     */
    deletedBy?: string;
    emails?: Email[];
    /**
     * The first name of the person.
     */
    firstName?: string;
    followers?: string[];
    /**
     * Typically a list of previous companies where the contact has worked or schools that the contact has attended
     */
    headline?: string;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * The initials of the person, usually derived from their first, middle, and last names.
     */
    initials?: string;
    jobUrl?: string;
    lastInteractionAt?: Date;
    /**
     * The last name of the person.
     */
    lastName?: string;
    /**
     * Middle name of the person.
     */
    middleName?: string;
    /**
     * The name of an applicant.
     */
    name?: string;
    ownerId?: string;
    phoneNumbers?: PhoneNumber[];
    /**
     * The URL of the photo of a person.
     */
    photoUrl?: string;
    /**
     * The PositionId the applicant applied for.
     */
    positionId?: string;
    recordUrl?: string;
    recruiterId?: string;
    rejectedAt?: Date;
    socialLinks?: ApplicantSocialLinks[];
    sourceId?: string;
    sourcedBy?: string;
    sources?: string[];
    stageId?: string;
    tags?: string[];
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
    websites?: ApplicantWebsites[];
}
export declare class ApplicantInput extends SpeakeasyBase {
    addresses?: Address[];
    anonymized?: boolean;
    applications?: string[];
    archived?: boolean;
    /**
     * The date of birth of the person.
     */
    birthday?: Date;
    confidential?: boolean;
    coordinatorId?: string;
    coverLetter?: string;
    customFields?: CustomField[];
    deleted?: boolean;
    emails?: Email[];
    /**
     * The first name of the person.
     */
    firstName?: string;
    followers?: string[];
    /**
     * Typically a list of previous companies where the contact has worked or schools that the contact has attended
     */
    headline?: string;
    /**
     * The initials of the person, usually derived from their first, middle, and last names.
     */
    initials?: string;
    /**
     * The last name of the person.
     */
    lastName?: string;
    /**
     * Middle name of the person.
     */
    middleName?: string;
    /**
     * The name of an applicant.
     */
    name?: string;
    ownerId?: string;
    phoneNumbers?: PhoneNumber[];
    /**
     * The URL of the photo of a person.
     */
    photoUrl?: string;
    /**
     * The PositionId the applicant applied for.
     */
    positionId?: string;
    recordUrl?: string;
    recruiterId?: string;
    socialLinks?: ApplicantSocialLinks[];
    sources?: string[];
    stageId?: string;
    tags?: string[];
    /**
     * The job title of the person.
     */
    title?: string;
    websites?: ApplicantWebsites[];
}
