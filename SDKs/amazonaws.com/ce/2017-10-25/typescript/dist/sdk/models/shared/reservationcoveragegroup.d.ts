import { SpeakeasyBase } from "../../../internal/utils";
import { Coverage } from "./coverage";
/**
 * A group of reservations that share a set of attributes.
 */
export declare class ReservationCoverageGroup extends SpeakeasyBase {
    attributes?: Record<string, string>;
    coverage?: Coverage;
}
