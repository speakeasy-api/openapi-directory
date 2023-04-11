import { SpeakeasyBase } from "../../../internal/utils";
import { AtimeEnum } from "./atimeenum";
import { GidEnum } from "./gidenum";
import { LogLevelEnum } from "./loglevelenum";
import { MtimeEnum } from "./mtimeenum";
import { ObjectTagsEnum } from "./objecttagsenum";
import { OverwriteModeEnum } from "./overwritemodeenum";
import { PosixPermissionsEnum } from "./posixpermissionsenum";
import { PreserveDeletedFilesEnum } from "./preservedeletedfilesenum";
import { PreserveDevicesEnum } from "./preservedevicesenum";
import { SmbSecurityDescriptorCopyFlagsEnum } from "./smbsecuritydescriptorcopyflagsenum";
import { TaskQueueingEnum } from "./taskqueueingenum";
import { TransferModeEnum } from "./transfermodeenum";
import { UidEnum } from "./uidenum";
import { VerifyModeEnum } from "./verifymodeenum";
/**
 * <p>Configures your DataSync task settings. These options include how DataSync handles files, objects, and their associated metadata. You also can specify how DataSync verifies data integrity, set bandwidth limits for your task, among other options.</p> <p>Each task setting has a default value. Unless you need to, you don't have to configure any of these <code>Options</code> before starting your task.</p>
 */
export declare class Options extends SpeakeasyBase {
    atime?: AtimeEnum;
    bytesPerSecond?: number;
    gid?: GidEnum;
    logLevel?: LogLevelEnum;
    mtime?: MtimeEnum;
    objectTags?: ObjectTagsEnum;
    overwriteMode?: OverwriteModeEnum;
    posixPermissions?: PosixPermissionsEnum;
    preserveDeletedFiles?: PreserveDeletedFilesEnum;
    preserveDevices?: PreserveDevicesEnum;
    securityDescriptorCopyFlags?: SmbSecurityDescriptorCopyFlagsEnum;
    taskQueueing?: TaskQueueingEnum;
    transferMode?: TransferModeEnum;
    uid?: UidEnum;
    verifyMode?: VerifyModeEnum;
}
