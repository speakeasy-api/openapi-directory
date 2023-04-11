import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationConfig } from "./authenticationconfig";
import { ConnectorMetadata } from "./connectormetadata";
import { ConnectorProvisioningConfig } from "./connectorprovisioningconfig";
import { ConnectorProvisioningTypeEnum } from "./connectorprovisioningtypeenum";
import { ConnectorRuntimeSetting } from "./connectorruntimesetting";
import { ConnectorTypeEnum } from "./connectortypeenum";
import { OperatorsEnum } from "./operatorsenum";
import { ScheduleFrequencyTypeEnum } from "./schedulefrequencytypeenum";
import { TriggerTypeEnum } from "./triggertypeenum";
import { WriteOperationTypeEnum } from "./writeoperationtypeenum";
/**
 *  The configuration settings related to a given connector.
 */
export declare class ConnectorConfiguration extends SpeakeasyBase {
    authenticationConfig?: AuthenticationConfig;
    canUseAsDestination?: boolean;
    canUseAsSource?: boolean;
    connectorArn?: string;
    connectorDescription?: string;
    connectorLabel?: string;
    connectorMetadata?: ConnectorMetadata;
    connectorModes?: string[];
    connectorName?: string;
    connectorOwner?: string;
    connectorProvisioningConfig?: ConnectorProvisioningConfig;
    connectorProvisioningType?: ConnectorProvisioningTypeEnum;
    connectorRuntimeSettings?: ConnectorRuntimeSetting[];
    connectorType?: ConnectorTypeEnum;
    connectorVersion?: string;
    isPrivateLinkEnabled?: boolean;
    isPrivateLinkEndpointUrlRequired?: boolean;
    logoURL?: string;
    registeredAt?: Date;
    registeredBy?: string;
    supportedApiVersions?: string[];
    supportedDestinationConnectors?: ConnectorTypeEnum[];
    supportedOperators?: OperatorsEnum[];
    supportedSchedulingFrequencies?: ScheduleFrequencyTypeEnum[];
    supportedTriggerTypes?: TriggerTypeEnum[];
    supportedWriteOperations?: WriteOperationTypeEnum[];
}
