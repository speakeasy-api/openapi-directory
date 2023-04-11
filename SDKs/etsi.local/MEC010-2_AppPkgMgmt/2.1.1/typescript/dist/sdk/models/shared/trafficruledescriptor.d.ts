import { SpeakeasyBase } from "../../../internal/utils";
import { ActionEnum } from "./actionenum";
import { FilterTypeEnum } from "./filtertypeenum";
import { InterfaceDescriptor } from "./interfacedescriptor";
import { TrafficFilter } from "./trafficfilter";
export declare class TrafficRuleDescriptor extends SpeakeasyBase {
    /**
     * 'Identifies the action of the MEC host data plane, when a packet matches the trafficFilter.'
     */
    action: ActionEnum;
    dstInterface?: InterfaceDescriptor[];
    /**
     * Definition of filter type: per FLOW or PACKET
     */
    filterType: FilterTypeEnum;
    /**
     * Priority of this traffic rule. If traffic rule conflicts, the one with higher priority take precedence.
     */
    priority: number;
    /**
     * The filter used to identify specific flow/packets that need to be handled by the MEC host.
     */
    trafficFilter: TrafficFilter[];
    /**
     * Identifies the traffic rule.
     */
    trafficRuleId: string;
}
