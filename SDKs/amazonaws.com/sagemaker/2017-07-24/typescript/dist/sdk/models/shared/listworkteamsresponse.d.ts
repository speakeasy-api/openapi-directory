import { SpeakeasyBase } from "../../../internal/utils";
import { Workteam } from "./workteam";
/**
 * Success
 */
export declare class ListWorkteamsResponse extends SpeakeasyBase {
    nextToken?: string;
    workteams: Workteam[];
}
