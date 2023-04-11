import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogEntry } from "./catalogentry";
import { Location } from "./location";
export declare class GetMappingRequest extends SpeakeasyBase {
    location?: Location;
    sinks?: CatalogEntry[];
    source: CatalogEntry;
}
