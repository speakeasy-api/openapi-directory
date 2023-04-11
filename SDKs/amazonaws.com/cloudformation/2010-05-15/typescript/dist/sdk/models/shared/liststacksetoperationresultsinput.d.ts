import { SpeakeasyBase } from "../../../internal/utils";
import { CallAsEnum } from "./callasenum";
import { OperationResultFilter } from "./operationresultfilter";
export declare class ListStackSetOperationResultsInput extends SpeakeasyBase {
    callAs?: CallAsEnum;
    filters?: OperationResultFilter[];
    maxResults?: number;
    nextToken?: string;
    operationId: string;
    stackSetName: string;
}
