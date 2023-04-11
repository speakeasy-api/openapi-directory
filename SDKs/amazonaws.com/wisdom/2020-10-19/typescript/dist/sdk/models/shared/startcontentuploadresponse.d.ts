import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class StartContentUploadResponse extends SpeakeasyBase {
    headersToInclude: Record<string, string>;
    uploadId: string;
    url: string;
    urlExpiry: Date;
}
