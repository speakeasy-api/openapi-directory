import { SpeakeasyBase } from "../../../internal/utils";
import { Problem } from "./problem";
/**
 * Success
 */
export declare class ListProblemsResponse extends SpeakeasyBase {
    nextToken?: string;
    problemList?: Problem[];
    resourceGroupName?: string;
}
