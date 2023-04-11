import { SpeakeasyBase } from "../../../internal/utils";
import { CapacitySizeTypeEnum } from "./capacitysizetypeenum";
/**
 * Specifies the endpoint capacity to activate for production.
 */
export declare class CapacitySize extends SpeakeasyBase {
    type: CapacitySizeTypeEnum;
    value: number;
}
