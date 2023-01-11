import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceUpdateList } from "./serviceupdatelist";
export declare class ServiceUpdatesMessage extends SpeakeasyBase {
    marker?: string;
    serviceUpdates?: ServiceUpdateList[];
}
