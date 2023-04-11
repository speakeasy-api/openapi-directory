import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class ZoneInfo extends SpeakeasyBase {
    description?: string[];
    inBundles?: string[];
    includes?: string[];
    /**
     * TLD type
     */
    type: string;
    /**
     * TLD name
     */
    zone: string;
}
