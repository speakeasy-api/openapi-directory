import { SpeakeasyBase } from "../../../internal/utils";
import { Candidate } from "./candidate";
import { OffsetInfo } from "./offsetinfo";
export declare class CandidatePage extends SpeakeasyBase {
    pagination?: OffsetInfo;
    results?: Candidate[];
}
