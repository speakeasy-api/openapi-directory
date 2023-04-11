import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyComponentsRecordsDestinyRecordComponent } from "./destinycomponentsrecordsdestinyrecordcomponent";
export declare class DestinyComponentsRecordsDestinyCharacterRecordsComponent extends SpeakeasyBase {
    featuredRecordHashes?: number[];
    /**
     * The hash for the root presentation node definition of Triumph categories.
     */
    recordCategoriesRootNodeHash?: number;
    /**
     * The hash for the root presentation node definition of Triumph Seals.
     */
    recordSealsRootNodeHash?: number;
    records?: Record<string, DestinyComponentsRecordsDestinyRecordComponent>;
}
