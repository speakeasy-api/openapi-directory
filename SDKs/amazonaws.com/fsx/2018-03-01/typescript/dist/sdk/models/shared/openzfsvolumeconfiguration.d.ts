import { SpeakeasyBase } from "../../../internal/utils";
import { OpenZFSDataCompressionTypeEnum } from "./openzfsdatacompressiontypeenum";
import { OpenZFSNfsExport } from "./openzfsnfsexport";
import { OpenZFSOriginSnapshotConfiguration } from "./openzfsoriginsnapshotconfiguration";
import { OpenZFSUserOrGroupQuota } from "./openzfsuserorgroupquota";
/**
 * The configuration of an Amazon FSx for OpenZFS volume.
 */
export declare class OpenZFSVolumeConfiguration extends SpeakeasyBase {
    copyTagsToSnapshots?: boolean;
    dataCompressionType?: OpenZFSDataCompressionTypeEnum;
    deleteClonedVolumes?: boolean;
    deleteIntermediateSnaphots?: boolean;
    nfsExports?: OpenZFSNfsExport[];
    originSnapshot?: OpenZFSOriginSnapshotConfiguration;
    parentVolumeId?: string;
    readOnly?: boolean;
    recordSizeKiB?: number;
    restoreToSnapshot?: string;
    storageCapacityQuotaGiB?: number;
    storageCapacityReservationGiB?: number;
    userAndGroupQuotas?: OpenZFSUserOrGroupQuota[];
    volumePath?: string;
}
