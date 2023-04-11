import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
import { Website } from "./website";
export declare enum HrisCompanyStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Trial = "trial",
    Other = "other"
}
export declare class HrisCompanyInput extends SpeakeasyBase {
    addresses?: Address[];
    /**
     * An Company Number, Company ID or Company Code, is a unique number that has been assigned to each company.
     */
    companyNumber?: string;
    debtorId?: string;
    displayName?: string;
    emails?: Email[];
    legalName: string;
    phoneNumbers?: PhoneNumber[];
    status?: HrisCompanyStatusEnum;
    subdomain?: string;
    websites?: Website[];
}
export declare class HrisCompany extends SpeakeasyBase {
    addresses?: Address[];
    /**
     * An Company Number, Company ID or Company Code, is a unique number that has been assigned to each company.
     */
    companyNumber?: string;
    /**
     * The date and time when the object was created.
     */
    createdAt?: Date;
    /**
     * The user who created the object.
     */
    createdBy?: string;
    debtorId?: string;
    deleted?: boolean;
    displayName?: string;
    emails?: Email[];
    /**
     * A unique identifier for an object.
     */
    id?: string;
    legalName: string;
    phoneNumbers?: PhoneNumber[];
    status?: HrisCompanyStatusEnum;
    subdomain?: string;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    /**
     * The user who last updated the object.
     */
    updatedBy?: string;
    websites?: Website[];
}
