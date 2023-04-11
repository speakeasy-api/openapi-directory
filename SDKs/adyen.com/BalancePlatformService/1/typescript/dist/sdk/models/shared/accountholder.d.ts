import { SpeakeasyBase } from "../../../internal/utils";
import { AccountHolderCapability, AccountHolderCapabilityInput } from "./accountholdercapability";
import { ContactDetails } from "./contactdetails";
/**
 * The status of the account holder.
 *
 * @remarks
 *
 * Possible values:
 *
 *  * **Active**: The account holder is active. This is the default status when creating an account holder.
 *
 *  * **Inactive**: The account holder is temporarily inactive due to missing KYC details. You can set the account back to active by providing the missing KYC details.
 *
 *  * **Suspended**: The account holder is permanently deactivated by Adyen. This action cannot be undone.
 *
 * * **Closed**: The account holder is permanently deactivated by you. This action cannot be undone.
 */
export declare enum AccountHolderStatusEnum {
    Active = "Active",
    Closed = "Closed",
    Inactive = "Inactive",
    Suspended = "Suspended"
}
/**
 * OK - the request has succeeded.
 */
export declare class AccountHolder extends SpeakeasyBase {
    /**
     * The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the account holder belongs. Required in the request if your API credentials can be used for multiple balance platforms.
     */
    balancePlatform?: string;
    /**
     * Contains key-value pairs that specify the actions that an account holder can do in your platform. The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability.
     */
    capabilities?: Record<string, AccountHolderCapability>;
    contactDetails?: ContactDetails;
    /**
     * Your description for the account holder, maximum 300 characters.
     */
    description?: string;
    /**
     * The unique identifier of the account holder.
     */
    id: string;
    /**
     * The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id) associated with the account holder. Adyen performs a verification process against the legal entity of the account holder.
     */
    legalEntityId: string;
    /**
     * The ID of the account holder's primary balance account. By default, this is set to the first balance account that you create for the account holder. To assign a different balance account, send a PATCH request.
     */
    primaryBalanceAccount?: string;
    /**
     * Your reference for the account holder, maximum 150 characters.
     */
    reference?: string;
    /**
     * The status of the account holder.
     *
     * @remarks
     *
     * Possible values:
     *
     *  * **Active**: The account holder is active. This is the default status when creating an account holder.
     *
     *  * **Inactive**: The account holder is temporarily inactive due to missing KYC details. You can set the account back to active by providing the missing KYC details.
     *
     *  * **Suspended**: The account holder is permanently deactivated by Adyen. This action cannot be undone.
     *
     * * **Closed**: The account holder is permanently deactivated by you. This action cannot be undone.
     */
    status?: AccountHolderStatusEnum;
    /**
     * The [time zone](https://www.iana.org/time-zones) of the account holder. For example, **Europe/Amsterdam**.
     *
     * @remarks
     * Defaults to the time zone of the balance platform if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
     */
    timeZone?: string;
}
export declare class AccountHolderInput extends SpeakeasyBase {
    /**
     * The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the account holder belongs. Required in the request if your API credentials can be used for multiple balance platforms.
     */
    balancePlatform?: string;
    /**
     * Contains key-value pairs that specify the actions that an account holder can do in your platform. The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability.
     */
    capabilities?: Record<string, AccountHolderCapabilityInput>;
    contactDetails?: ContactDetails;
    /**
     * Your description for the account holder, maximum 300 characters.
     */
    description?: string;
    /**
     * The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id) associated with the account holder. Adyen performs a verification process against the legal entity of the account holder.
     */
    legalEntityId: string;
    /**
     * The ID of the account holder's primary balance account. By default, this is set to the first balance account that you create for the account holder. To assign a different balance account, send a PATCH request.
     */
    primaryBalanceAccount?: string;
    /**
     * Your reference for the account holder, maximum 150 characters.
     */
    reference?: string;
    /**
     * The status of the account holder.
     *
     * @remarks
     *
     * Possible values:
     *
     *  * **Active**: The account holder is active. This is the default status when creating an account holder.
     *
     *  * **Inactive**: The account holder is temporarily inactive due to missing KYC details. You can set the account back to active by providing the missing KYC details.
     *
     *  * **Suspended**: The account holder is permanently deactivated by Adyen. This action cannot be undone.
     *
     * * **Closed**: The account holder is permanently deactivated by you. This action cannot be undone.
     */
    status?: AccountHolderStatusEnum;
    /**
     * The [time zone](https://www.iana.org/time-zones) of the account holder. For example, **Europe/Amsterdam**.
     *
     * @remarks
     * Defaults to the time zone of the balance platform if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
     */
    timeZone?: string;
}
