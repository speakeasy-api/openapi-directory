import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Result of performing a get-page-angle operation
 */
export declare class GetPageAngleResult extends SpeakeasyBase {
    /**
     * Angle of the page in radians; 0 represents perfectly horizontal
     */
    angle?: number;
    /**
     * True if the operation was successful, false otherwise
     */
    successful?: boolean;
}
