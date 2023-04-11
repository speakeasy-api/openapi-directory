import { SpeakeasyBase } from "../../../internal/utils";
import { AwsVpcConfiguration } from "./awsvpcconfiguration";
/**
 * The network configuration for a task or service.
 */
export declare class NetworkConfiguration extends SpeakeasyBase {
    awsvpcConfiguration?: AwsVpcConfiguration;
}
