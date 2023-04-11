import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The metadata associated with an setting
 */
export declare class SettingMetadata extends SpeakeasyBase {
    /**
     * the time that the particular revision was created
     */
    createdAt?: string;
    /**
     * the user who created the particular revision
     */
    createdBy?: string;
    /**
     * the version number of the object
     */
    version?: number;
}
