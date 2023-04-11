import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutorStateEnum } from "./executorstateenum";
export declare class ListExecutorsRequest extends SpeakeasyBase {
    executorStateFilter?: ExecutorStateEnum;
    maxResults?: number;
    nextToken?: string;
    sessionId: string;
}
