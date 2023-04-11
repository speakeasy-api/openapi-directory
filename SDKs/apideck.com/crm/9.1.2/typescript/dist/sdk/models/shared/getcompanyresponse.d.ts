import { SpeakeasyBase } from "../../../internal/utils";
import { Company } from "./company";
/**
 * Company
 */
export declare class GetCompanyResponse extends SpeakeasyBase {
    data: Company;
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
