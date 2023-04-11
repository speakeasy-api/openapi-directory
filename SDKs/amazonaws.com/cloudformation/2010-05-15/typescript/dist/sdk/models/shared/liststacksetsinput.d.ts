import { SpeakeasyBase } from "../../../internal/utils";
import { CallAsEnum } from "./callasenum";
import { StackSetStatusEnum } from "./stacksetstatusenum";
export declare class ListStackSetsInput extends SpeakeasyBase {
    callAs?: CallAsEnum;
    maxResults?: number;
    nextToken?: string;
    status?: StackSetStatusEnum;
}
