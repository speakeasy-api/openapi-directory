import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type is a container for a list of ad IDs.
 */
export declare class AdIds extends SpeakeasyBase {
    /**
     * A list of ad IDs. Only one ad can be deleted per operation and only one adId value will be returned.
     */
    adIds?: string[];
}
