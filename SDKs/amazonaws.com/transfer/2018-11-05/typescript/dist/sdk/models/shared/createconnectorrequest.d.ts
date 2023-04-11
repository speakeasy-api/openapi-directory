import { SpeakeasyBase } from "../../../internal/utils";
import { As2ConnectorConfig } from "./as2connectorconfig";
import { Tag } from "./tag";
export declare class CreateConnectorRequest extends SpeakeasyBase {
    accessRole: string;
    as2Config: As2ConnectorConfig;
    loggingRole?: string;
    tags?: Tag[];
    url: string;
}
