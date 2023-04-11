import { SpeakeasyBase } from "../../../internal/utils";
export declare class OfferFunctionality extends SpeakeasyBase {
    /**
     * The functionality code
     */
    functionalityCode: string;
    /**
     * The max value in integer for this feature in this offer
     */
    maxValueInteger?: number;
    /**
     * A description text of this feature
     */
    text?: string;
    /**
     * Is this feature is unlimited for this offer?
     */
    unlimited: boolean;
}
