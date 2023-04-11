import { SpeakeasyBase } from "../../../internal/utils";
import { FlywheelIterationFilter } from "./flywheeliterationfilter";
export declare class ListFlywheelIterationHistoryRequest extends SpeakeasyBase {
    filter?: FlywheelIterationFilter;
    flywheelArn: string;
    maxResults?: number;
    nextToken?: string;
}
