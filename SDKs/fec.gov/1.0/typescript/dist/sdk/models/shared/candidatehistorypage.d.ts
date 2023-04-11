import { SpeakeasyBase } from "../../../internal/utils";
import { CandidateHistory } from "./candidatehistory";
import { OffsetInfo } from "./offsetinfo";
export declare class CandidateHistoryPage extends SpeakeasyBase {
    pagination?: OffsetInfo;
    results?: CandidateHistory[];
}
