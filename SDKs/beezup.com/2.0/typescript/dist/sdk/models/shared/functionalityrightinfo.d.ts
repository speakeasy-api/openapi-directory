import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describe the rights for a functionality
 */
export declare class FunctionalityRightInfo extends SpeakeasyBase {
    /**
     * The functionality code
     */
    functionalityCode: string;
    /**
     * The max value for this functionality code considering your rights
     */
    maxValueInterger?: number;
    /**
     * If you can use this functionality unlimitedly
     */
    unlimited?: boolean;
}
