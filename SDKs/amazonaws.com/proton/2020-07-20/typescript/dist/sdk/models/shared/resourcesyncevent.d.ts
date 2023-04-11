import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Detail data for a resource sync event.
 */
export declare class ResourceSyncEvent extends SpeakeasyBase {
    event: string;
    externalId?: string;
    time: Date;
    type: string;
}
