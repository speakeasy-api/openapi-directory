import { SpeakeasyBase } from "../../../internal/utils";
import { EvidenceFinderBackfillStatusEnum } from "./evidencefinderbackfillstatusenum";
import { EvidenceFinderEnablementStatusEnum } from "./evidencefinderenablementstatusenum";
/**
 * The settings object that specifies whether evidence finder is enabled. This object also describes the related event data store, and the backfill status for populating the event data store with evidence data.
 */
export declare class EvidenceFinderEnablement extends SpeakeasyBase {
    backfillStatus?: EvidenceFinderBackfillStatusEnum;
    enablementStatus?: EvidenceFinderEnablementStatusEnum;
    error?: string;
    eventDataStoreArn?: string;
}
