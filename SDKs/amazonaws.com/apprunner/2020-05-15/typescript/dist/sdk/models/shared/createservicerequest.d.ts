import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { HealthCheckConfiguration } from "./healthcheckconfiguration";
import { InstanceConfiguration } from "./instanceconfiguration";
import { NetworkConfiguration } from "./networkconfiguration";
import { ServiceObservabilityConfiguration } from "./serviceobservabilityconfiguration";
import { SourceConfiguration } from "./sourceconfiguration";
import { Tag } from "./tag";
export declare class CreateServiceRequest extends SpeakeasyBase {
    autoScalingConfigurationArn?: string;
    encryptionConfiguration?: EncryptionConfiguration;
    healthCheckConfiguration?: HealthCheckConfiguration;
    instanceConfiguration?: InstanceConfiguration;
    networkConfiguration?: NetworkConfiguration;
    observabilityConfiguration?: ServiceObservabilityConfiguration;
    serviceName: string;
    sourceConfiguration: SourceConfiguration;
    tags?: Tag[];
}
