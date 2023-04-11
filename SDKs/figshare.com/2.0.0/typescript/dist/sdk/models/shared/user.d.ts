import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK. User representation
 */
export declare class User extends SpeakeasyBase {
    /**
     * First Name
     */
    firstName: string;
    /**
     * User id
     */
    id: number;
    /**
     * Account activity status
     */
    isActive: boolean;
    /**
     * Account public status
     */
    isPublic: boolean;
    /**
     * User Job title
     */
    jobTitle: string;
    /**
     * Last Name
     */
    lastName: string;
    /**
     * Full Name
     */
    name: string;
    /**
     * Orcid associated to this User
     */
    orcidId: string;
    /**
     * Name that appears in website url
     */
    urlName: string;
}
