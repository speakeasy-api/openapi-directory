import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerInstance } from "./containerinstance";
import { Failure } from "./failure";
/**
 * Success
 */
export declare class DescribeContainerInstancesResponse extends SpeakeasyBase {
    containerInstances?: ContainerInstance[];
    failures?: Failure[];
}
