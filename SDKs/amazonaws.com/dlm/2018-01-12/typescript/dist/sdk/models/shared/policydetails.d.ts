import { SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
import { EventSource } from "./eventsource";
import { ParametersT } from "./parameters";
import { PolicyTypeValuesEnum } from "./policytypevaluesenum";
import { ResourceLocationValuesEnum } from "./resourcelocationvaluesenum";
import { ResourceTypeValuesEnum } from "./resourcetypevaluesenum";
import { Schedule } from "./schedule";
import { Tag } from "./tag";
/**
 *  <b>[All policy types]</b> Specifies the configuration of a lifecycle policy.
 */
export declare class PolicyDetails extends SpeakeasyBase {
    actions?: Action[];
    eventSource?: EventSource;
    parameters?: ParametersT;
    policyType?: PolicyTypeValuesEnum;
    resourceLocations?: ResourceLocationValuesEnum[];
    resourceTypes?: ResourceTypeValuesEnum[];
    schedules?: Schedule[];
    targetTags?: Tag[];
}
