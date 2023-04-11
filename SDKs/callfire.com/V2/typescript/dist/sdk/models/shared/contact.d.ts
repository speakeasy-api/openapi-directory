import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a contact in CallFire platform. Contains info about the people you want to contact. It allows you to store a user-defined properties for each contact
 */
export declare class Contact extends SpeakeasyBase {
    /**
     * A deleted contact, deleted contacts are hidden from search results
     */
    deleted?: boolean;
    /**
     * An external id of a contact for syncing with external sources
     */
    externalId?: string;
    /**
     * External system that external id refers to
     */
    externalSystem?: string;
    /**
     * Phone number in E.164 format (11-digit). Example: 12132000384
     */
    extraPhone1?: string;
    /**
     * Phone number in E.164 format (11-digit). Example: 12132000384
     */
    extraPhone2?: string;
    /**
     * Phone number in E.164 format (11-digit). Example: 12132000384
     */
    extraPhone3?: string;
    /**
     * A first name of a contact
     */
    firstName?: string;
    /**
     * Phone number in E.164 format (11-digit). Example: 12132000384
     */
    homePhone?: string;
    /**
     * An id of a contact
     */
    id?: number;
    /**
     * A last name of a contact
     */
    lastName?: string;
    /**
     * Phone number in E.164 format (11-digit). Example: 12132000384
     */
    mobilePhone?: string;
    /**
     * Map of user-defined string properties for contact
     */
    properties?: Record<string, string>;
    /**
     * Phone number in E.164 format (11-digit). Example: 12132000384
     */
    workPhone?: string;
    /**
     * A Zip code of a contact
     */
    zipcode?: string;
}
