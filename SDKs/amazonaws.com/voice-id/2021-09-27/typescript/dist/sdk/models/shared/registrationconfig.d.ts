import { SpeakeasyBase } from "../../../internal/utils";
import { DuplicateRegistrationActionEnum } from "./duplicateregistrationactionenum";
/**
 * The registration configuration to be used during the batch fraudster registration job.
 */
export declare class RegistrationConfig extends SpeakeasyBase {
    duplicateRegistrationAction?: DuplicateRegistrationActionEnum;
    fraudsterSimilarityThreshold?: number;
    watchlistIds?: string[];
}
