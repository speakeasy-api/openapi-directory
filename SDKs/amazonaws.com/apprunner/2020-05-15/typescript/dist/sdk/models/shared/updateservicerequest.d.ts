import { SpeakeasyBase } from "../../../internal/utils";
import { HealthCheckConfiguration } from "./healthcheckconfiguration";
import { InstanceConfiguration } from "./instanceconfiguration";
import { NetworkConfiguration } from "./networkconfiguration";
import { ServiceObservabilityConfiguration } from "./serviceobservabilityconfiguration";
import { SourceConfiguration } from "./sourceconfiguration";
export declare class UpdateServiceRequest extends SpeakeasyBase {
    autoScalingConfigurationArn?: string;
    healthCheckConfiguration?: HealthCheckConfiguration;
    instanceConfiguration?: InstanceConfiguration;
    networkConfiguration?: NetworkConfiguration;
    observabilityConfiguration?: ServiceObservabilityConfiguration;
    serviceArn: string;
    sourceConfiguration?: SourceConfiguration;
}
