import { SpeakeasyBase } from "../../../internal/utils";
import { CommunicationCostByCandidate } from "./communicationcostbycandidate";
import { OffsetInfo } from "./offsetinfo";
export declare class CommunicationCostByCandidatePage extends SpeakeasyBase {
    pagination?: OffsetInfo;
    results?: CommunicationCostByCandidate[];
}
