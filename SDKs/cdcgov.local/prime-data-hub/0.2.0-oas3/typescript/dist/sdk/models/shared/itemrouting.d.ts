import { SpeakeasyBase } from "../../../internal/utils";
export declare class ItemRouting extends SpeakeasyBase {
    /**
     * The organization and service destinations
     */
    destinations?: string[];
    /**
     * the index of the item in the submitted report (0 based)
     */
    reportIndex?: number;
    /**
     * The tracking id provided by the sender defined in the schema, null otherwise
     */
    trackingId?: string;
}
