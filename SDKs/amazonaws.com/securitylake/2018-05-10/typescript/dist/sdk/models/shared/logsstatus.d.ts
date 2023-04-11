import { SpeakeasyBase } from "../../../internal/utils";
import { SourceStatusEnum } from "./sourcestatusenum";
/**
 * Retrieves the Logs status for the Amazon Security Lake account.
 */
export declare class LogsStatus extends SpeakeasyBase {
    healthStatus: SourceStatusEnum;
    pathToLogs: string;
}
