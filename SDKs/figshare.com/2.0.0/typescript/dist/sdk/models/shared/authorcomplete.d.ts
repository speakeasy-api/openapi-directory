import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK. Article representation
 */
export declare class AuthorComplete extends SpeakeasyBase {
    /**
     * First Name
     */
    firstName: string;
    /**
     * Author full name
     */
    fullName: string;
    /**
     * Group id
     */
    groupId: number;
    /**
     * Author id
     */
    id: number;
    /**
     * Institution id
     */
    institutionId: number;
    /**
     * True if author has published items
     */
    isActive: boolean;
    /**
     * if 1 then the author has published items
     */
    isPublic: number;
    /**
     * Job title
     */
    jobTitle: string;
    /**
     * Last Name
     */
    lastName: string;
    /**
     * Author Orcid
     */
    orcidId: string;
    /**
     * Author url name
     */
    urlName: string;
}
