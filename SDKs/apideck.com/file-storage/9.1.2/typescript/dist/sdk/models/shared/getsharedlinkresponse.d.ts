import { SpeakeasyBase } from "../../../internal/utils";
import { SharedLinkOutput } from "./sharedlink";
/**
 * Shared Link
 */
export declare class GetSharedLinkResponseOutput extends SpeakeasyBase {
    data: SharedLinkOutput;
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
