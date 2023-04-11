import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CompanyIdDatasetSecurity extends SpeakeasyBase {
    userKey: string;
}
/**
 * company master data by id
 */
export declare enum CompanyIdDatasetDatasetEnum {
    Unknown = "",
    Mini = "mini",
    Master = "master",
    Full = "full",
    Refresh = "refresh"
}
/**
 * Optional data translation (only available in limited jurisdictions)
 */
export declare enum CompanyIdDatasetLangEnum {
    Unknown = "",
    En = "EN",
    Es = "ES",
    Fr = "FR"
}
export declare class CompanyIdDatasetRequest extends SpeakeasyBase {
    /**
     * Try to retrieve additional stock information for this company. (Only available on refresh)
     */
    checkStockListing?: boolean;
    /**
     * company master data by id
     */
    dataset: CompanyIdDatasetDatasetEnum;
    /**
     * company master data by id
     */
    id: string;
    /**
     * Optional data translation (only available in limited jurisdictions)
     */
    lang?: CompanyIdDatasetLangEnum;
}
/**
 * Detailed information about the error
 */
export declare class CompanyIdDatasetDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
export declare class CompanyIdDatasetResponse extends SpeakeasyBase {
    /**
     * Detailed information about the error
     */
    companyIdDatasetDefaultApplicationJSONObject?: CompanyIdDatasetDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    oneapi1v11company1deepsearch1lei1Percent7BnumberPercent7DGetResponses200ContentApplication1jsonSchemaPropertiesCompany?: shared.Oneapi1v11company1deepsearch1lei1Percent7BnumberPercent7DGetResponses200ContentApplication1jsonSchemaPropertiesCompany;
}
