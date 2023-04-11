import { SpeakeasyBase } from "../../../internal/utils";
import { UltimateParentCompanyBusinessDetails } from "./ultimateparentcompanybusinessdetails";
import { ViasAddress } from "./viasaddress";
export declare class UltimateParentCompany extends SpeakeasyBase {
    address?: ViasAddress;
    businessDetails?: UltimateParentCompanyBusinessDetails;
    /**
     * Adyen-generated unique alphanumeric identifier (UUID) for the entry, returned in the response when you create an ultimate parent company. Required when updating an existing entry in an `/updateAccountHolder` request.
     */
    ultimateParentCompanyCode?: string;
}
