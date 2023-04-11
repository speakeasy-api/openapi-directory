import { SpeakeasyBase } from "../../../internal/utils";
import { CandidateHistoryTotal } from "./candidatehistorytotal";
import { OffsetInfo } from "./offsetinfo";
export declare class CandidateHistoryTotalPage extends SpeakeasyBase {
    pagination?: OffsetInfo;
    results?: CandidateHistoryTotal[];
}
