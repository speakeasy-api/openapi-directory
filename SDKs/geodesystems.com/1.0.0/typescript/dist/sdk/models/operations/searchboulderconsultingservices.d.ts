import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SearchBoulderConsultingServicesRequest extends SpeakeasyBase {
    /**
     * Archive change date from
     */
    changedateFrom?: Date;
    /**
     * Archive change date to
     */
    changedateTo?: Date;
    /**
     * Archive create date from
     */
    createdateFrom?: Date;
    /**
     * Archive create date to
     */
    createdateTo?: Date;
    /**
     * Search description
     */
    description?: string;
    /**
     * File suffix
     */
    filesuffix?: string;
    /**
     * From date
     */
    fromdate?: Date;
    /**
     * Parent entry
     */
    group?: string;
    /**
     * Max number of results
     */
    max?: number;
    /**
     * Northern bounds of search
     */
    maxlatitude?: number;
    /**
     * Eastern bounds of search
     */
    maxlongitude?: number;
    /**
     * Southern bounds of search
     */
    minlatitude?: number;
    /**
     * Western bounds of search
     */
    minlongitude?: number;
    /**
     * Search name
     */
    name?: string;
    /**
     * Account Description
     */
    searchDbBoulderConsultingServicesAccountDescription?: string;
    /**
     * Amount
     */
    searchDbBoulderConsultingServicesAmount?: number;
    /**
     * Comment
     */
    searchDbBoulderConsultingServicesComment?: string;
    /**
     * Date
     */
    searchDbBoulderConsultingServicesDate?: string;
    /**
     * Department
     */
    searchDbBoulderConsultingServicesDepartment?: string;
    /**
     * Fund
     */
    searchDbBoulderConsultingServicesFund?: string;
    /**
     * Object
     */
    searchDbBoulderConsultingServicesObject?: string;
    /**
     * Organization
     */
    searchDbBoulderConsultingServicesOrganization?: string;
    /**
     * Project
     */
    searchDbBoulderConsultingServicesProject?: string;
    /**
     * Purchase Order
     */
    searchDbBoulderConsultingServicesPurchaseOrder?: string;
    /**
     * Vendor Name
     */
    searchDbBoulderConsultingServicesVendorName?: string;
    /**
     * Number to skip
     */
    skip?: number;
    /**
     * Search text
     */
    text?: string;
    /**
     * To date
     */
    todate?: Date;
}
export declare class SearchBoulderConsultingServicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
