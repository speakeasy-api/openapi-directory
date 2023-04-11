import { SpeakeasyBase } from "../../../internal/utils";
export declare class PreviewEntity extends SpeakeasyBase {
    /**
     * Link to download preview
     */
    downloadUri?: string;
    /**
     * Preview ID
     */
    id?: number;
    /**
     * Preview size
     */
    size?: string;
    /**
     * Preview status.  Can be invalid, not_generated, generating, complete, or file_too_large
     */
    status?: string;
    /**
     * Preview type. Can be image, pdf, pdf_native, video, or audio
     */
    type?: string;
}
