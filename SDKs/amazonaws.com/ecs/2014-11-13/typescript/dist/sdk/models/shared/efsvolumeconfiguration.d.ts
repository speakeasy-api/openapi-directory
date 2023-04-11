import { SpeakeasyBase } from "../../../internal/utils";
import { EFSAuthorizationConfig } from "./efsauthorizationconfig";
import { EFSTransitEncryptionEnum } from "./efstransitencryptionenum";
/**
 * This parameter is specified when you're using an Amazon Elastic File System file system for task storage. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html">Amazon EFS volumes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
 */
export declare class EFSVolumeConfiguration extends SpeakeasyBase {
    authorizationConfig?: EFSAuthorizationConfig;
    fileSystemId: string;
    rootDirectory?: string;
    transitEncryption?: EFSTransitEncryptionEnum;
    transitEncryptionPort?: number;
}
