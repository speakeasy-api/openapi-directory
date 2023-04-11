import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyComponentsRecordsDestinyRecordComponent } from "./destinycomponentsrecordsdestinyrecordcomponent";
export declare class DestinyComponentsRecordsDestinyProfileRecordsComponent extends SpeakeasyBase {
    /**
     * Your 'active' Triumphs score.
     */
    activeScore?: number;
    /**
     * Your 'legacy' Triumphs score.
     */
    legacyScore?: number;
    /**
     * Your 'lifetime' Triumphs score.
     */
    lifetimeScore?: number;
    /**
     * The hash for the root presentation node definition of Triumph categories.
     */
    recordCategoriesRootNodeHash?: number;
    /**
     * The hash for the root presentation node definition of Triumph Seals.
     */
    recordSealsRootNodeHash?: number;
    records?: Record<string, DestinyComponentsRecordsDestinyRecordComponent>;
    /**
     * Your 'active' Triumphs score, maintained for backwards compatibility.
     */
    score?: number;
    /**
     * If this profile is tracking a record, this is the hash identifier of the record it is tracking.
     */
    trackedRecordHash?: number;
}
