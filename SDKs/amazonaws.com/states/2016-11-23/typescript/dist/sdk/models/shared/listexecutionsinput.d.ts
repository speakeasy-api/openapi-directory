import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionStatusEnum } from "./executionstatusenum";
export declare class ListExecutionsInput extends SpeakeasyBase {
    mapRunArn?: string;
    maxResults?: number;
    nextToken?: string;
    stateMachineArn?: string;
    statusFilter?: ExecutionStatusEnum;
}
