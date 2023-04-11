import { SpeakeasyBase } from "../../../internal/utils";
import { Region } from "./region";
/**
 * ~
 */
export declare class NumberT extends SpeakeasyBase {
    /**
     * ~
     */
    nationalFormat?: string;
    /**
     * ~
     */
    number?: string;
    /**
     * Every local number associated with a region. You can query regions to use them in subsequent purchase requests
     */
    region?: Region;
    /**
     * ~
     */
    sendEmailOnCreate?: boolean;
    /**
     * ~
     */
    tollFree?: boolean;
}
