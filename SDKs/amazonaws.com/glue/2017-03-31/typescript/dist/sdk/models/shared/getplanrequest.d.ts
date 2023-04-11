import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogEntry } from "./catalogentry";
import { LanguageEnum } from "./languageenum";
import { Location } from "./location";
import { MappingEntry } from "./mappingentry";
export declare class GetPlanRequest extends SpeakeasyBase {
    additionalPlanOptionsMap?: Record<string, string>;
    language?: LanguageEnum;
    location?: Location;
    mapping: MappingEntry[];
    sinks?: CatalogEntry[];
    source: CatalogEntry;
}
