import { SpeakeasyBase } from "../../../internal/utils";
import { UploadSession } from "./uploadsession";
/**
 * UploadSessions
 */
export declare class GetUploadSessionResponse extends SpeakeasyBase {
    data: UploadSession;
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
