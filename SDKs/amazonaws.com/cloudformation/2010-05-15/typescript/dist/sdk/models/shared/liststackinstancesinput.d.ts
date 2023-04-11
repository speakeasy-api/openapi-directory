import { SpeakeasyBase } from "../../../internal/utils";
import { CallAsEnum } from "./callasenum";
import { StackInstanceFilter } from "./stackinstancefilter";
export declare class ListStackInstancesInput extends SpeakeasyBase {
    callAs?: CallAsEnum;
    filters?: StackInstanceFilter[];
    maxResults?: number;
    nextToken?: string;
    stackInstanceAccount?: string;
    stackInstanceRegion?: string;
    stackSetName: string;
}
