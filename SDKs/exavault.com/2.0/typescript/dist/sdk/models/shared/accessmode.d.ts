import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object defining what a not-logged-in visitor can do with the share contents
 */
export declare class AccessMode extends SpeakeasyBase {
    /**
     * Whether share allows visitors to delete contents
     */
    delete?: boolean;
    /**
     * Whether share allows visitors to download
     */
    download?: boolean;
    /**
     * Whether share allows visitors to rename or move contents.
     */
    modify?: boolean;
    /**
     * Whether share allows visitors to upload
     */
    upload?: boolean;
}
