import { SpeakeasyBase } from "../../../internal/utils";
import { CompanyInfo } from "./companyinfo";
/**
 * CompanyInfo
 */
export declare class GetCompanyInfoResponse extends SpeakeasyBase {
    data: CompanyInfo;
    /**
     * Operation performed
     */
    operation: string;
    /**
     * Unified API resource name
     */
    resource: string;
    /**
     * Apideck ID of service provider
     */
    service: string;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}
