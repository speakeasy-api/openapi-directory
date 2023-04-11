import { SpeakeasyBase } from "../../../internal/utils";
import { PipeStateEnum } from "./pipestateenum";
import { RequestedPipeStateDescribeResponseEnum } from "./requestedpipestatedescriberesponseenum";
/**
 * Success
 */
export declare class DeletePipeResponse extends SpeakeasyBase {
    arn?: string;
    creationTime?: Date;
    currentState?: PipeStateEnum;
    desiredState?: RequestedPipeStateDescribeResponseEnum;
    lastModifiedTime?: Date;
    name?: string;
}
