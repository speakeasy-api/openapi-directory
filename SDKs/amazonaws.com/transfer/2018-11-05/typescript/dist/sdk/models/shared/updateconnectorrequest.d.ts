import { SpeakeasyBase } from "../../../internal/utils";
import { As2ConnectorConfig } from "./as2connectorconfig";
export declare class UpdateConnectorRequest extends SpeakeasyBase {
    accessRole?: string;
    as2Config?: As2ConnectorConfig;
    connectorId: string;
    loggingRole?: string;
    url?: string;
}
