import { SpeakeasyBase } from "../../../internal/utils";
import { ElectioneeringByCandidate } from "./electioneeringbycandidate";
import { OffsetInfo } from "./offsetinfo";
export declare class ElectioneeringByCandidatePage extends SpeakeasyBase {
    pagination?: OffsetInfo;
    results?: ElectioneeringByCandidate[];
}
