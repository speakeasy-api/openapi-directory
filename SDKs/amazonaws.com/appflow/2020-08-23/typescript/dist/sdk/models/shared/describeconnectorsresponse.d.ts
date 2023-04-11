import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorConfiguration } from "./connectorconfiguration";
import { ConnectorDetail } from "./connectordetail";
/**
 * Success
 */
export declare class DescribeConnectorsResponse extends SpeakeasyBase {
    connectorConfigurations?: Record<string, ConnectorConfiguration>;
    connectors?: ConnectorDetail[];
    nextToken?: string;
}
