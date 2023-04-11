import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityProvider } from "./capacityprovider";
import { Failure } from "./failure";
/**
 * Success
 */
export declare class DescribeCapacityProvidersResponse extends SpeakeasyBase {
    capacityProviders?: CapacityProvider[];
    failures?: Failure[];
    nextToken?: string;
}
