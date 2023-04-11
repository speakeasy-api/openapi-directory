import { SpeakeasyBase } from "../../../internal/utils";
import { CCTotalsByCandidate } from "./cctotalsbycandidate";
import { OffsetInfo } from "./offsetinfo";
export declare class CCTotalsByCandidatePage extends SpeakeasyBase {
    pagination?: OffsetInfo;
    results?: CCTotalsByCandidate[];
}
