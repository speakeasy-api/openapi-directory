import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceIdFilterOperatorEnum } from "./instanceidfilteroperatorenum";
/**
 * Connect instance identifier filter
 */
export declare class InstanceIdFilter extends SpeakeasyBase {
    /**
     * Operators for Connect instance identifier filter
     */
    operator: InstanceIdFilterOperatorEnum;
    /**
     * Amazon Connect Instance Id
     */
    value: string;
}
