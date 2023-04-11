import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Upload channel information
 */
export declare class CreateFileUploadResponse extends SpeakeasyBase {
    /**
     * Upload token
     */
    token: string;
    /**
     * Upload (channel) ID
     */
    uploadId: string;
    /**
     * (public) Upload URL
     */
    uploadUrl: string;
}
