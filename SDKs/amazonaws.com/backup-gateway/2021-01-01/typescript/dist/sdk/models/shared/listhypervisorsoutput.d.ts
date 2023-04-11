import { SpeakeasyBase } from "../../../internal/utils";
import { Hypervisor } from "./hypervisor";
/**
 * Success
 */
export declare class ListHypervisorsOutput extends SpeakeasyBase {
    hypervisors?: Hypervisor[];
    nextToken?: string;
}
