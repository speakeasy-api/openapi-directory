import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Detailed information about the error
 */
export declare class CompanyMonitorChangeTypesListDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
export declare class CompanyMonitorChangeTypesListResponse extends SpeakeasyBase {
    /**
     * List of ChangeTypes
     */
    companyMonitorChangeTypesList200ApplicationJSONStrings?: string[];
    /**
     * Detailed information about the error
     */
    companyMonitorChangeTypesListDefaultApplicationJSONObject?: CompanyMonitorChangeTypesListDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
