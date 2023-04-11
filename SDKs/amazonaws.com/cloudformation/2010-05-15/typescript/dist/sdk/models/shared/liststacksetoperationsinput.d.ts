import { SpeakeasyBase } from "../../../internal/utils";
import { CallAsEnum } from "./callasenum";
export declare class ListStackSetOperationsInput extends SpeakeasyBase {
    callAs?: CallAsEnum;
    maxResults?: number;
    nextToken?: string;
    stackSetName: string;
}
