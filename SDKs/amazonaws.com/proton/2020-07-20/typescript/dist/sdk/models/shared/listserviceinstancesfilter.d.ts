import { SpeakeasyBase } from "../../../internal/utils";
import { ListServiceInstancesFilterByEnum } from "./listserviceinstancesfilterbyenum";
/**
 * A filtering criterion to scope down the result list of the <a>ListServiceInstances</a> action.
 */
export declare class ListServiceInstancesFilter extends SpeakeasyBase {
    key?: ListServiceInstancesFilterByEnum;
    value?: string;
}
