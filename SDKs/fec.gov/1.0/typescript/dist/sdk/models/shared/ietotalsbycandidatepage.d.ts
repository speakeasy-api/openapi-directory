import { SpeakeasyBase } from "../../../internal/utils";
import { IETotalsByCandidate } from "./ietotalsbycandidate";
import { OffsetInfo } from "./offsetinfo";
export declare class IETotalsByCandidatePage extends SpeakeasyBase {
    pagination?: OffsetInfo;
    results?: IETotalsByCandidate[];
}
