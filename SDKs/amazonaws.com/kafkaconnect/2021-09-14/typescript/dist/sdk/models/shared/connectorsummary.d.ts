import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityDescription } from "./capacitydescription";
import { ConnectorStateEnum } from "./connectorstateenum";
import { KafkaClusterClientAuthenticationDescription } from "./kafkaclusterclientauthenticationdescription";
import { KafkaClusterDescription } from "./kafkaclusterdescription";
import { KafkaClusterEncryptionInTransitDescription } from "./kafkaclusterencryptionintransitdescription";
import { LogDeliveryDescription } from "./logdeliverydescription";
import { PluginDescription } from "./plugindescription";
import { WorkerConfigurationDescription } from "./workerconfigurationdescription";
/**
 * Summary of a connector.
 */
export declare class ConnectorSummary extends SpeakeasyBase {
    capacity?: CapacityDescription;
    connectorArn?: string;
    connectorDescription?: string;
    connectorName?: string;
    connectorState?: ConnectorStateEnum;
    creationTime?: Date;
    currentVersion?: string;
    kafkaCluster?: KafkaClusterDescription;
    kafkaClusterClientAuthentication?: KafkaClusterClientAuthenticationDescription;
    kafkaClusterEncryptionInTransit?: KafkaClusterEncryptionInTransitDescription;
    kafkaConnectVersion?: string;
    logDelivery?: LogDeliveryDescription;
    plugins?: PluginDescription[];
    serviceExecutionRoleArn?: string;
    workerConfiguration?: WorkerConfigurationDescription;
}
