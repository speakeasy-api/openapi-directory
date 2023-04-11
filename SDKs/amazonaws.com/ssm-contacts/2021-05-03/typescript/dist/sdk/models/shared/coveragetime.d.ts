import { SpeakeasyBase } from "../../../internal/utils";
import { HandOffTime } from "./handofftime";
/**
 * Information about when an on-call shift begins and ends.
 */
export declare class CoverageTime extends SpeakeasyBase {
    end?: HandOffTime;
    start?: HandOffTime;
}
