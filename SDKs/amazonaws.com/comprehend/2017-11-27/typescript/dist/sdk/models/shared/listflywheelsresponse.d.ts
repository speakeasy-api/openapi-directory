import { SpeakeasyBase } from "../../../internal/utils";
import { FlywheelSummary } from "./flywheelsummary";
/**
 * Success
 */
export declare class ListFlywheelsResponse extends SpeakeasyBase {
    flywheelSummaryList?: FlywheelSummary[];
    nextToken?: string;
}
