import { SpeakeasyBase } from "../../../internal/utils";
import { ReservedNodeExchangeActionTypeEnum } from "./reservednodeexchangeactiontypeenum";
export declare class GetReservedNodeExchangeConfigurationOptionsInputMessage extends SpeakeasyBase {
    actionType: ReservedNodeExchangeActionTypeEnum;
    clusterIdentifier?: string;
    marker?: string;
    maxRecords?: number;
    snapshotIdentifier?: string;
}
