import { SpeakeasyBase } from "../../../internal/utils";
import { As2ConnectorConfig } from "./as2connectorconfig";
import { Tag } from "./tag";
/**
 * Describes the parameters for the connector, as identified by the <code>ConnectorId</code>.
 */
export declare class DescribedConnector extends SpeakeasyBase {
    accessRole?: string;
    arn: string;
    as2Config?: As2ConnectorConfig;
    connectorId?: string;
    loggingRole?: string;
    tags?: Tag[];
    url?: string;
}
