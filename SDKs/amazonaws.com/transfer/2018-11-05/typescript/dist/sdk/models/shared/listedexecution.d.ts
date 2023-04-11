import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionStatusEnum } from "./executionstatusenum";
import { FileLocation } from "./filelocation";
import { ServiceMetadata } from "./servicemetadata";
/**
 * Returns properties of the execution that is specified.
 */
export declare class ListedExecution extends SpeakeasyBase {
    executionId?: string;
    initialFileLocation?: FileLocation;
    serviceMetadata?: ServiceMetadata;
    status?: ExecutionStatusEnum;
}
