import { SpeakeasyBase } from "../../../internal/utils";
import { AquaConfigurationStatusEnum } from "./aquaconfigurationstatusenum";
import { AquaStatusEnum } from "./aquastatusenum";
/**
 * The operation that uses this structure is retired. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator).
 */
export declare class AquaConfiguration extends SpeakeasyBase {
    aquaConfigurationStatus?: AquaConfigurationStatusEnum;
    aquaStatus?: AquaStatusEnum;
}
