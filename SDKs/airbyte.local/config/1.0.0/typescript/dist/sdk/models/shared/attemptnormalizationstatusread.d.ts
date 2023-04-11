import { SpeakeasyBase } from "../../../internal/utils";
export declare class AttemptNormalizationStatusRead extends SpeakeasyBase {
    attemptNumber?: number;
    hasNormalizationFailed?: boolean;
    hasRecordsCommitted?: boolean;
    recordsCommitted?: number;
}
