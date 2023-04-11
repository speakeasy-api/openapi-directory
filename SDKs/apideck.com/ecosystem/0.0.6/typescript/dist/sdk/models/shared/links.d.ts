import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Links to navigate to previous or next pages through the API
 */
export declare class Links extends SpeakeasyBase {
    /**
     * Link to navigate to the current page through the API
     */
    current: string;
    /**
     * Link to navigate to the previous page through the API
     */
    next?: string;
    /**
     * Link to navigate to the previous page through the API
     */
    previous?: string;
}
