import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutorsSummary } from "./executorssummary";
/**
 * Success
 */
export declare class ListExecutorsResponse extends SpeakeasyBase {
    executorsSummary?: ExecutorsSummary[];
    nextToken?: string;
    sessionId: string;
}
