import { SpeakeasyBase } from "../../../internal/utils";
import { HrisCompany } from "./hriscompany";
/**
 * Company
 */
export declare class GetHrisCompanyResponse extends SpeakeasyBase {
    data: HrisCompany;
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
