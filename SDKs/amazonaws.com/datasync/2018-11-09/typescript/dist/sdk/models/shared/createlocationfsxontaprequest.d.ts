import { SpeakeasyBase } from "../../../internal/utils";
import { FsxProtocol } from "./fsxprotocol";
import { TagListEntry } from "./taglistentry";
export declare class CreateLocationFsxOntapRequest extends SpeakeasyBase {
    /**
     * Specifies the data transfer protocol that DataSync uses to access your Amazon FSx file system.
     */
    protocol: FsxProtocol;
    securityGroupArns: string[];
    storageVirtualMachineArn: string;
    subdirectory?: string;
    tags?: TagListEntry[];
}
