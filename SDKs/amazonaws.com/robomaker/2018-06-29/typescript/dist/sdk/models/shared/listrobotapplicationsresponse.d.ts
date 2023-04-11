import { SpeakeasyBase } from "../../../internal/utils";
import { RobotApplicationSummary } from "./robotapplicationsummary";
/**
 * Success
 */
export declare class ListRobotApplicationsResponse extends SpeakeasyBase {
    nextToken?: string;
    robotApplicationSummaries?: RobotApplicationSummary[];
}
