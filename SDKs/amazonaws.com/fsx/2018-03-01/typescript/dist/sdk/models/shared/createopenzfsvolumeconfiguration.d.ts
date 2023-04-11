import { SpeakeasyBase } from "../../../internal/utils";
import { CreateOpenZFSOriginSnapshotConfiguration } from "./createopenzfsoriginsnapshotconfiguration";
import { OpenZFSDataCompressionTypeEnum } from "./openzfsdatacompressiontypeenum";
import { OpenZFSNfsExport } from "./openzfsnfsexport";
import { OpenZFSUserOrGroupQuota } from "./openzfsuserorgroupquota";
/**
 * Specifies the configuration of the Amazon FSx for OpenZFS volume that you are creating.
 */
export declare class CreateOpenZFSVolumeConfiguration extends SpeakeasyBase {
    copyTagsToSnapshots?: boolean;
    dataCompressionType?: OpenZFSDataCompressionTypeEnum;
    nfsExports?: OpenZFSNfsExport[];
    originSnapshot?: CreateOpenZFSOriginSnapshotConfiguration;
    parentVolumeId: string;
    readOnly?: boolean;
    recordSizeKiB?: number;
    storageCapacityQuotaGiB?: number;
    storageCapacityReservationGiB?: number;
    userAndGroupQuotas?: OpenZFSUserOrGroupQuota[];
}
