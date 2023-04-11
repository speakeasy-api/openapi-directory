import { SpeakeasyBase } from "../../../internal/utils";
import { TCPFlagEnum } from "./tcpflagenum";
/**
 * TCP flags and masks to inspect packets for, used in stateless rules <a>MatchAttributes</a> settings.
 */
export declare class TCPFlagField extends SpeakeasyBase {
    flags: TCPFlagEnum[];
    masks?: TCPFlagEnum[];
}
