import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityUnitsConfiguration } from "./capacityunitsconfiguration";
import { Tag } from "./tag";
export declare class CreateRescoreExecutionPlanRequest extends SpeakeasyBase {
    capacityUnits?: CapacityUnitsConfiguration;
    clientToken?: string;
    description?: string;
    name: string;
    tags?: Tag[];
}
