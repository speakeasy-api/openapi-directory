import { SpeakeasyBase } from "../../../internal/utils";
import { CustomConnectorDestinationProperties } from "./customconnectordestinationproperties";
import { CustomerProfilesDestinationProperties } from "./customerprofilesdestinationproperties";
import { EventBridgeDestinationProperties } from "./eventbridgedestinationproperties";
import { HoneycodeDestinationProperties } from "./honeycodedestinationproperties";
import { MarketoDestinationProperties } from "./marketodestinationproperties";
import { RedshiftDestinationProperties } from "./redshiftdestinationproperties";
import { S3DestinationProperties } from "./s3destinationproperties";
import { SalesforceDestinationProperties } from "./salesforcedestinationproperties";
import { SAPODataDestinationProperties } from "./sapodatadestinationproperties";
import { SnowflakeDestinationProperties } from "./snowflakedestinationproperties";
import { UpsolverDestinationProperties } from "./upsolverdestinationproperties";
import { ZendeskDestinationProperties } from "./zendeskdestinationproperties";
/**
 *  This stores the information that is required to query a particular connector.
 */
export declare class DestinationConnectorProperties extends SpeakeasyBase {
    customConnector?: CustomConnectorDestinationProperties;
    customerProfiles?: CustomerProfilesDestinationProperties;
    eventBridge?: EventBridgeDestinationProperties;
    honeycode?: HoneycodeDestinationProperties;
    lookoutMetrics?: Record<string, any>;
    marketo?: MarketoDestinationProperties;
    redshift?: RedshiftDestinationProperties;
    s3?: S3DestinationProperties;
    sapoData?: SAPODataDestinationProperties;
    salesforce?: SalesforceDestinationProperties;
    snowflake?: SnowflakeDestinationProperties;
    upsolver?: UpsolverDestinationProperties;
    zendesk?: ZendeskDestinationProperties;
}
