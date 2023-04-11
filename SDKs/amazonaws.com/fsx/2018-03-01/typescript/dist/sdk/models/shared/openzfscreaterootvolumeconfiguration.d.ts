import { SpeakeasyBase } from "../../../internal/utils";
import { OpenZFSDataCompressionTypeEnum } from "./openzfsdatacompressiontypeenum";
import { OpenZFSNfsExport } from "./openzfsnfsexport";
import { OpenZFSUserOrGroupQuota } from "./openzfsuserorgroupquota";
/**
 * The configuration of an Amazon FSx for OpenZFS root volume.
 */
export declare class OpenZFSCreateRootVolumeConfiguration extends SpeakeasyBase {
    copyTagsToSnapshots?: boolean;
    dataCompressionType?: OpenZFSDataCompressionTypeEnum;
    nfsExports?: OpenZFSNfsExport[];
    readOnly?: boolean;
    recordSizeKiB?: number;
    userAndGroupQuotas?: OpenZFSUserOrGroupQuota[];
}
