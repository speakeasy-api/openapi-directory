import { SpeakeasyBase } from "../../../internal/utils";
import { Activity } from "./activity";
/**
 * Activity
 */
export declare class GetActivityResponse extends SpeakeasyBase {
    data: Activity;
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
