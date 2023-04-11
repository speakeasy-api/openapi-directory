import { SpeakeasyBase } from "../../../internal/utils";
import { AquaConfigurationStatusEnum } from "./aquaconfigurationstatusenum";
export declare class ModifyAquaInputMessage extends SpeakeasyBase {
    aquaConfigurationStatus?: AquaConfigurationStatusEnum;
    clusterIdentifier: string;
}
