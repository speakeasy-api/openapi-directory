import { SpeakeasyBase } from "../../../internal/utils";
import { CodeRepositorySummary } from "./coderepositorysummary";
/**
 * Success
 */
export declare class ListCodeRepositoriesOutput extends SpeakeasyBase {
    codeRepositorySummaryList: CodeRepositorySummary[];
    nextToken?: string;
}
