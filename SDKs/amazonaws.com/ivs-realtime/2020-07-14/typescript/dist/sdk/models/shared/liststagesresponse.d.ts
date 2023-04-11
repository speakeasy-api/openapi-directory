import { SpeakeasyBase } from "../../../internal/utils";
import { StageSummary } from "./stagesummary";
/**
 * Success
 */
export declare class ListStagesResponse extends SpeakeasyBase {
    nextToken?: string;
    stages: StageSummary[];
}
