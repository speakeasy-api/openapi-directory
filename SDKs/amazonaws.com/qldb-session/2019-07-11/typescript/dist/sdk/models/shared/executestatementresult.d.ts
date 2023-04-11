import { SpeakeasyBase } from "../../../internal/utils";
import { IOUsage } from "./iousage";
import { Page } from "./page";
import { TimingInformation } from "./timinginformation";
/**
 * Contains the details of the executed statement.
 */
export declare class ExecuteStatementResult extends SpeakeasyBase {
    consumedIOs?: IOUsage;
    firstPage?: Page;
    timingInformation?: TimingInformation;
}
