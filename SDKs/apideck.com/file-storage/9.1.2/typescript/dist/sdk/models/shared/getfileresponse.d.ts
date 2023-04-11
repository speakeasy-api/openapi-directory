import { SpeakeasyBase } from "../../../internal/utils";
import { UnifiedFile } from "./unifiedfile";
/**
 * File
 */
export declare class GetFileResponse extends SpeakeasyBase {
    data: UnifiedFile;
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
