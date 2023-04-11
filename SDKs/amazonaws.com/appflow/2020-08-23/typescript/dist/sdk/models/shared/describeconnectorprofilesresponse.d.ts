import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorProfile } from "./connectorprofile";
/**
 * Success
 */
export declare class DescribeConnectorProfilesResponse extends SpeakeasyBase {
    connectorProfileDetails?: ConnectorProfile[];
    nextToken?: string;
}
