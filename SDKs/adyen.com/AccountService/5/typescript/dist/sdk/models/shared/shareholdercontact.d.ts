import { SpeakeasyBase } from "../../../internal/utils";
import { ViasAddress } from "./viasaddress";
import { ViasName } from "./viasname";
import { ViasPersonalData } from "./viaspersonaldata";
import { ViasPhoneNumber } from "./viasphonenumber";
/**
 * Specifies how the person is associated with the account holder.
 *
 * @remarks
 *
 * Possible values:
 *
 * * **Owner**: Individuals who directly or indirectly own 25% or more of a company.
 *
 * * **Controller**: Individuals who are members of senior management staff responsible for managing a company or organization.
 */
export declare enum ShareholderContactShareholderTypeEnum {
    Controller = "Controller",
    Owner = "Owner",
    Signatory = "Signatory"
}
export declare class ShareholderContact extends SpeakeasyBase {
    address?: ViasAddress;
    /**
     * The e-mail address of the person.
     */
    email?: string;
    /**
     * The phone number of the person provided as a single string.  It will be handled as a landline phone.
     *
     * @remarks
     * Examples: "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"
     */
    fullPhoneNumber?: string;
    /**
     * Job title of the person. Required when the `shareholderType` is **Controller**.
     *
     * @remarks
     *
     * Example values: **Chief Executive Officer**, **Chief Financial Officer**, **Chief Operating Officer**, **President**, **Vice President**, **Executive President**, **Managing Member**, **Partner**, **Treasurer**, **Director**, or **Other**.
     */
    jobTitle?: string;
    name?: ViasName;
    personalData?: ViasPersonalData;
    phoneNumber?: ViasPhoneNumber;
    /**
     * The unique identifier (UUID) of the shareholder entry.
     *
     * @remarks
     * >**If, during an Account Holder create or update request, this field is left blank (but other fields provided), a new Shareholder will be created with a procedurally-generated UUID.**
     *
     * >**If, during an Account Holder create request, a UUID is provided, the creation of Account Holder will fail with a validation Error..**
     *
     * >**If, during an Account Holder update request, a UUID that is not correlated with an existing Shareholder is provided, the update of the Shareholder will fail.**
     *
     * >**If, during an Account Holder update request, a UUID that is correlated with an existing Shareholder is provided, the existing Shareholder will be updated.**
     *
     */
    shareholderCode?: string;
    /**
     * Your reference for the shareholder entry.
     */
    shareholderReference?: string;
    /**
     * Specifies how the person is associated with the account holder.
     *
     * @remarks
     *
     * Possible values:
     *
     * * **Owner**: Individuals who directly or indirectly own 25% or more of a company.
     *
     * * **Controller**: Individuals who are members of senior management staff responsible for managing a company or organization.
     */
    shareholderType?: ShareholderContactShareholderTypeEnum;
    /**
     * The URL of the person's website.
     */
    webAddress?: string;
}
