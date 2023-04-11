import { SpeakeasyBase } from "../../../internal/utils";
import { CommandInvocation } from "./commandinvocation";
/**
 * Success
 */
export declare class ListCommandInvocationsResult extends SpeakeasyBase {
    commandInvocations?: CommandInvocation[];
    nextToken?: string;
}
