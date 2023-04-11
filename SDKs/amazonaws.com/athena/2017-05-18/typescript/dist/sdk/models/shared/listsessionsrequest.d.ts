import { SpeakeasyBase } from "../../../internal/utils";
import { SessionStateEnum } from "./sessionstateenum";
export declare class ListSessionsRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    stateFilter?: SessionStateEnum;
    workGroup: string;
}
