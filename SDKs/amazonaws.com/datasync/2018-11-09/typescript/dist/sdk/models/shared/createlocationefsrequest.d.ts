import { SpeakeasyBase } from "../../../internal/utils";
import { Ec2Config } from "./ec2config";
import { EfsInTransitEncryptionEnum } from "./efsintransitencryptionenum";
import { TagListEntry } from "./taglistentry";
/**
 * CreateLocationEfsRequest
 */
export declare class CreateLocationEfsRequest extends SpeakeasyBase {
    accessPointArn?: string;
    ec2Config: Ec2Config;
    efsFilesystemArn: string;
    fileSystemAccessRoleArn?: string;
    inTransitEncryption?: EfsInTransitEncryptionEnum;
    subdirectory?: string;
    tags?: TagListEntry[];
}
