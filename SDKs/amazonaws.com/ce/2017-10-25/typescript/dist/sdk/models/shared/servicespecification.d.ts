import { SpeakeasyBase } from "../../../internal/utils";
import { Ec2Specification } from "./ec2specification";
/**
 * Hardware specifications for the service that you want recommendations for.
 */
export declare class ServiceSpecification extends SpeakeasyBase {
    ec2Specification?: Ec2Specification;
}
