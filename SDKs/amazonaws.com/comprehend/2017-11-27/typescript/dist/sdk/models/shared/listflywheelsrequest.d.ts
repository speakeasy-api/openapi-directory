import { SpeakeasyBase } from "../../../internal/utils";
import { FlywheelFilter } from "./flywheelfilter";
export declare class ListFlywheelsRequest extends SpeakeasyBase {
    filter?: FlywheelFilter;
    maxResults?: number;
    nextToken?: string;
}
