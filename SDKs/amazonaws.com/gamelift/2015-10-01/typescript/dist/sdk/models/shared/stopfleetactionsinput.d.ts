import { SpeakeasyBase } from "../../../internal/utils";
import { FleetActionEnum } from "./fleetactionenum";
export declare class StopFleetActionsInput extends SpeakeasyBase {
    actions: FleetActionEnum[];
    fleetId: string;
    location?: string;
}
