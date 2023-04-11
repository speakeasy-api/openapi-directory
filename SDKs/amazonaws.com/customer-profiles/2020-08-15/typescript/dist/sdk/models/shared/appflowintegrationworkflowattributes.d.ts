import { SpeakeasyBase } from "../../../internal/utils";
import { SourceConnectorTypeEnum } from "./sourceconnectortypeenum";
/**
 * Structure holding all <code>APPFLOW_INTEGRATION</code> specific workflow attributes.
 */
export declare class AppflowIntegrationWorkflowAttributes extends SpeakeasyBase {
    connectorProfileName: string;
    roleArn?: string;
    sourceConnectorType: SourceConnectorTypeEnum;
}
