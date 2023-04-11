import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionResults } from "./executionresults";
import { ExecutionStatusEnum } from "./executionstatusenum";
import { FileLocation } from "./filelocation";
import { LoggingConfiguration } from "./loggingconfiguration";
import { PosixProfile } from "./posixprofile";
import { ServiceMetadata } from "./servicemetadata";
/**
 * The details for an execution object.
 */
export declare class DescribedExecution extends SpeakeasyBase {
    executionId?: string;
    executionRole?: string;
    initialFileLocation?: FileLocation;
    loggingConfiguration?: LoggingConfiguration;
    /**
     * The full POSIX identity, including user ID (<code>Uid</code>), group ID (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls your users' access to your Amazon EFS file systems. The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems.
     */
    posixProfile?: PosixProfile;
    results?: ExecutionResults;
    serviceMetadata?: ServiceMetadata;
    status?: ExecutionStatusEnum;
}
