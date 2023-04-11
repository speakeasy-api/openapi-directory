import { SpeakeasyBase } from "../../../internal/utils";
import { ActiveViolation } from "./activeviolation";
/**
 * Success
 */
export declare class ListActiveViolationsResponse extends SpeakeasyBase {
    activeViolations?: ActiveViolation[];
    nextToken?: string;
}
