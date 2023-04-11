import { SpeakeasyBase } from "../../../internal/utils";
import { BusinessDetails } from "./businessdetails";
import { IndividualDetails } from "./individualdetails";
import { ViasAddress } from "./viasaddress";
import { ViasPhoneNumber } from "./viasphonenumber";
export declare enum LegalArrangementEntityDetailLegalArrangementMembersEnum {
    Beneficiary = "Beneficiary",
    ControllingPerson = "ControllingPerson",
    Partner = "Partner",
    Protector = "Protector",
    Settlor = "Settlor",
    Shareholder = "Shareholder",
    Trustee = "Trustee"
}
/**
 * The legal entity type.
 *
 * @remarks
 *
 * Possible values: **Business**, **Individual**, **NonProfit**, **PublicCompany**, or **Partnership**.
 */
export declare enum LegalArrangementEntityDetailLegalEntityTypeEnum {
    Business = "Business",
    Individual = "Individual",
    NonProfit = "NonProfit",
    Partnership = "Partnership",
    PublicCompany = "PublicCompany"
}
export declare class LegalArrangementEntityDetail extends SpeakeasyBase {
    address?: ViasAddress;
    businessDetails?: BusinessDetails;
    /**
     * The e-mail address of the entity.
     */
    email?: string;
    /**
     * The phone number of the contact provided as a single string.  It will be handled as a landline phone.
     *
     * @remarks
     * **Examples:** "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"
     */
    fullPhoneNumber?: string;
    individualDetails?: IndividualDetails;
    /**
     * Adyen-generated unique alphanumeric identifier (UUID) for the entry, returned in the response when you create a legal arrangement entity.
     *
     * @remarks
     * Use only when updating an account holder. If you include this field when creating an account holder, the request will fail.
     */
    legalArrangementEntityCode?: string;
    /**
     * Your reference for the legal arrangement entity.
     */
    legalArrangementEntityReference?: string;
    /**
     * An array containing the roles of the entity in the legal arrangement.
     *
     * @remarks
     *
     * The possible values depend on the legal arrangement `type`.
     *
     * - For `type` **Association**: **ControllingPerson** and **Shareholder**.
     *
     * - For `type` **Partnership**: **Partner** and **Shareholder**.
     *
     * - For `type` **Trust**: **Trustee**, **Settlor**, **Protector**, **Beneficiary**,  and **Shareholder**.
     *
     *
     */
    legalArrangementMembers?: LegalArrangementEntityDetailLegalArrangementMembersEnum[];
    /**
     * The legal entity type.
     *
     * @remarks
     *
     * Possible values: **Business**, **Individual**, **NonProfit**, **PublicCompany**, or **Partnership**.
     */
    legalEntityType?: LegalArrangementEntityDetailLegalEntityTypeEnum;
    phoneNumber?: ViasPhoneNumber;
    /**
     * The URL of the website of the contact.
     */
    webAddress?: string;
}
