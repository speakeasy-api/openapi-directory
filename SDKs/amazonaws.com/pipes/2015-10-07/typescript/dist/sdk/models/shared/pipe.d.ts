import { SpeakeasyBase } from "../../../internal/utils";
import { PipeStateEnum } from "./pipestateenum";
import { RequestedPipeStateEnum } from "./requestedpipestateenum";
/**
 * An object that represents a pipe. Amazon EventBridgePipes connect event sources to targets and reduces the need for specialized knowledge and integration code.
 */
export declare class Pipe extends SpeakeasyBase {
    arn?: string;
    creationTime?: Date;
    currentState?: PipeStateEnum;
    desiredState?: RequestedPipeStateEnum;
    enrichment?: string;
    lastModifiedTime?: Date;
    name?: string;
    source?: string;
    stateReason?: string;
    target?: string;
}
