import { SpeakeasyBase } from "../../../internal/utils";
import { FsxProtocol } from "./fsxprotocol";
/**
 * Success
 */
export declare class DescribeLocationFsxOntapResponse extends SpeakeasyBase {
    creationTime?: Date;
    fsxFilesystemArn?: string;
    locationArn?: string;
    locationUri?: string;
    /**
     * Specifies the data transfer protocol that DataSync uses to access your Amazon FSx file system.
     */
    protocol?: FsxProtocol;
    securityGroupArns?: string[];
    storageVirtualMachineArn?: string;
}
