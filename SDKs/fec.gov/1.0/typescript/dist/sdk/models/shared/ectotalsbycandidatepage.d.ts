import { SpeakeasyBase } from "../../../internal/utils";
import { ECTotalsByCandidate } from "./ectotalsbycandidate";
import { OffsetInfo } from "./offsetinfo";
export declare class ECTotalsByCandidatePage extends SpeakeasyBase {
    pagination?: OffsetInfo;
    results?: ECTotalsByCandidate[];
}
