import { SpeakeasyBase } from "../../../internal/utils";
import { AwsVpcConfiguration } from "./awsvpcconfiguration";
/**
 * Specifies the network configuration for an ECS task.
 */
export declare class NetworkConfiguration extends SpeakeasyBase {
    awsvpcConfiguration?: AwsVpcConfiguration;
}
