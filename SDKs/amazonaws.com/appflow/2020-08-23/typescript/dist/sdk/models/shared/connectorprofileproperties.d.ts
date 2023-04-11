import { SpeakeasyBase } from "../../../internal/utils";
import { CustomConnectorProfileProperties } from "./customconnectorprofileproperties";
import { DatadogConnectorProfileProperties } from "./datadogconnectorprofileproperties";
import { DynatraceConnectorProfileProperties } from "./dynatraceconnectorprofileproperties";
import { InforNexusConnectorProfileProperties } from "./infornexusconnectorprofileproperties";
import { MarketoConnectorProfileProperties } from "./marketoconnectorprofileproperties";
import { PardotConnectorProfileProperties } from "./pardotconnectorprofileproperties";
import { RedshiftConnectorProfileProperties } from "./redshiftconnectorprofileproperties";
import { SalesforceConnectorProfileProperties } from "./salesforceconnectorprofileproperties";
import { SAPODataConnectorProfileProperties } from "./sapodataconnectorprofileproperties";
import { ServiceNowConnectorProfileProperties } from "./servicenowconnectorprofileproperties";
import { SlackConnectorProfileProperties } from "./slackconnectorprofileproperties";
import { SnowflakeConnectorProfileProperties } from "./snowflakeconnectorprofileproperties";
import { VeevaConnectorProfileProperties } from "./veevaconnectorprofileproperties";
import { ZendeskConnectorProfileProperties } from "./zendeskconnectorprofileproperties";
/**
 *  The connector-specific profile properties required by each connector.
 */
export declare class ConnectorProfileProperties extends SpeakeasyBase {
    amplitude?: Record<string, any>;
    customConnector?: CustomConnectorProfileProperties;
    datadog?: DatadogConnectorProfileProperties;
    dynatrace?: DynatraceConnectorProfileProperties;
    googleAnalytics?: Record<string, any>;
    honeycode?: Record<string, any>;
    inforNexus?: InforNexusConnectorProfileProperties;
    marketo?: MarketoConnectorProfileProperties;
    pardot?: PardotConnectorProfileProperties;
    redshift?: RedshiftConnectorProfileProperties;
    /**
     *  The connector-specific profile properties required when using SAPOData.
     */
    sapoData?: SAPODataConnectorProfileProperties;
    salesforce?: SalesforceConnectorProfileProperties;
    serviceNow?: ServiceNowConnectorProfileProperties;
    singular?: Record<string, any>;
    slack?: SlackConnectorProfileProperties;
    snowflake?: SnowflakeConnectorProfileProperties;
    trendmicro?: Record<string, any>;
    veeva?: VeevaConnectorProfileProperties;
    zendesk?: ZendeskConnectorProfileProperties;
}
