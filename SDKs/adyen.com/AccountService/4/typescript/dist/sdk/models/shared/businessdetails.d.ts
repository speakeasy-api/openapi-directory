import { SpeakeasyBase } from "../../../internal/utils";
import { ShareholderContact } from "./shareholdercontact";
import { SignatoryContact } from "./signatorycontact";
import { UltimateParentCompany } from "./ultimateparentcompany";
export declare class BusinessDetails extends SpeakeasyBase {
    /**
     * The registered name of the company (if it differs from the legal name of the company).
     */
    doingBusinessAs?: string;
    /**
     * The legal name of the company.
     */
    legalBusinessName?: string;
    /**
     * Information about the parent public company. Required if the account holder is 100% owned by a publicly listed company.
     */
    listedUltimateParentCompany?: UltimateParentCompany[];
    /**
     * The registration number of the company.
     */
    registrationNumber?: string;
    /**
     * Array containing information about individuals associated with the account holder either through ownership or control. For details about how you can identify them, refer to [our verification guide](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process#identify-ubos).
     */
    shareholders?: ShareholderContact[];
    /**
     * Signatories associated with the company.
     *
     * @remarks
     * Each array entry should represent one signatory.
     */
    signatories?: SignatoryContact[];
    /**
     * The tax ID of the company.
     */
    taxId?: string;
}
