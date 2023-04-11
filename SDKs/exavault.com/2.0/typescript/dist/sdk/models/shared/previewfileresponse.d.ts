import { SpeakeasyBase } from "../../../internal/utils";
import { PreviewFile } from "./previewfile";
/**
 * Response object for preview file
 */
export declare class PreviewFileResponse extends SpeakeasyBase {
    /**
     * Object with preview image properties.
     */
    data?: PreviewFile;
    /**
     * HTTP Status Code
     */
    responseStatus?: number;
}
