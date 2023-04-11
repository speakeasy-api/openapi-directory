import { SpeakeasyBase } from "../../../internal/utils";
import { OpenZFSDataCompressionTypeEnum } from "./openzfsdatacompressiontypeenum";
import { OpenZFSNfsExport } from "./openzfsnfsexport";
import { OpenZFSUserOrGroupQuota } from "./openzfsuserorgroupquota";
/**
 * Used to specify changes to the OpenZFS configuration for the volume that you are updating.
 */
export declare class UpdateOpenZFSVolumeConfiguration extends SpeakeasyBase {
    dataCompressionType?: OpenZFSDataCompressionTypeEnum;
    nfsExports?: OpenZFSNfsExport[];
    readOnly?: boolean;
    recordSizeKiB?: number;
    storageCapacityQuotaGiB?: number;
    storageCapacityReservationGiB?: number;
    userAndGroupQuotas?: OpenZFSUserOrGroupQuota[];
}
