import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { CurrencyEnum } from "./currencyenum";
import { Department } from "./department";
import { JobStatusEnum } from "./jobstatusenum";
export declare class JobBlocks extends SpeakeasyBase {
    content?: string;
    title?: string;
}
/**
 * Details of the branch for which the job is created.
 */
export declare class JobBranch extends SpeakeasyBase {
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * Name of the branch.
     */
    name?: string;
}
export declare enum JobEmploymentTermsEnum {
    FullTime = "full-time",
    PartTime = "part-time",
    Internship = "internship",
    Contractor = "contractor",
    Employee = "employee",
    Freelance = "freelance",
    Temp = "temp",
    Seasonal = "seasonal",
    Volunteer = "volunteer",
    Other = "other"
}
export declare class JobHiringManagers extends SpeakeasyBase {
    id?: string;
}
export declare class JobSalary extends SpeakeasyBase {
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    /**
     * Maximum salary payable for the job role.
     */
    max?: number;
    /**
     * Minimum salary payable for the job role.
     */
    min?: number;
}
/**
 * The visibility of the job
 */
export declare enum JobVisibilityEnum {
    Public = "public",
    Internal = "internal"
}
export declare class Job extends SpeakeasyBase {
    addresses?: Address[];
    /**
     * Specifies whether an employee of the organization can apply for the job.
     */
    availableToEmployees?: boolean;
    blocks?: JobBlocks[];
    /**
     * Details of the branch for which the job is created.
     */
    branch?: JobBranch;
    closing?: string;
    closingDate?: Date;
    /**
     * The closing section of the job description in HTML format
     */
    closingHtml?: string;
    /**
     * The code of the job.
     */
    code?: string;
    confidential?: boolean;
    /**
     * The date and time when the object was created.
     */
    createdAt?: Date;
    /**
     * The user who created the object.
     */
    createdBy?: string;
    deleted?: boolean;
    department?: Department;
    /**
     * A description of the object.
     */
    description?: string;
    /**
     * The job description in HTML format
     */
    descriptionHtml?: string;
    employmentTerms?: JobEmploymentTermsEnum;
    /**
     * Level of experience required for the job role.
     */
    experience?: string;
    followers?: string[];
    hiringManagers?: JobHiringManagers[];
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * URL of the job portal
     */
    jobPortalUrl?: string;
    /**
     * language code according to ISO 639-1. For the United States - EN
     */
    language?: string;
    ownerId?: string;
    publishedAt?: Date;
    recordUrl?: string;
    /**
     * The recruiter is generally someone who is tasked to help the hiring manager find and screen qualified applicant
     */
    recruiters?: string[];
    /**
     * Specifies whether the posting is for a remote job.
     */
    remote?: boolean;
    /**
     * A job's Requisition ID (Req ID) allows your organization to identify and track a job based on alphanumeric naming conventions unique to your company's internal processes.
     */
    requisitionId?: string;
    salary?: JobSalary;
    /**
     * Sequence in relation to other jobs.
     */
    sequence?: number;
    slug?: string;
    /**
     * The status of the job.
     */
    status?: JobStatusEnum;
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
    /**
     * URL of the job description
     */
    url?: string;
    /**
     * The visibility of the job
     */
    visibility?: JobVisibilityEnum;
}
