import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorProvisioningTypeEnum } from "./connectorprovisioningtypeenum";
import { ConnectorTypeEnum } from "./connectortypeenum";
/**
 * Information about the registered connector.
 */
export declare class ConnectorDetail extends SpeakeasyBase {
    applicationType?: string;
    connectorDescription?: string;
    connectorLabel?: string;
    connectorModes?: string[];
    connectorName?: string;
    connectorOwner?: string;
    connectorProvisioningType?: ConnectorProvisioningTypeEnum;
    connectorType?: ConnectorTypeEnum;
    connectorVersion?: string;
    registeredAt?: Date;
    registeredBy?: string;
}
