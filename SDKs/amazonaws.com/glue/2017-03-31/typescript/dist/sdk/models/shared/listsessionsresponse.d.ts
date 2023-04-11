import { SpeakeasyBase } from "../../../internal/utils";
import { Session } from "./session";
/**
 * Success
 */
export declare class ListSessionsResponse extends SpeakeasyBase {
    ids?: string[];
    nextToken?: string;
    sessions?: Session[];
}
