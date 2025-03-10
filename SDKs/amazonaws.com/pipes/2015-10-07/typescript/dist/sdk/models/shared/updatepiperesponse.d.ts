import { SpeakeasyBase } from "../../../internal/utils";
import { PipeStateEnum } from "./pipestateenum";
import { RequestedPipeStateEnum } from "./requestedpipestateenum";
/**
 * Success
 */
export declare class UpdatePipeResponse extends SpeakeasyBase {
    arn?: string;
    creationTime?: Date;
    currentState?: PipeStateEnum;
    desiredState?: RequestedPipeStateEnum;
    lastModifiedTime?: Date;
    name?: string;
}
