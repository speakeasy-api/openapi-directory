import { SpeakeasyBase } from "../../../internal/utils";
import { AmplitudeConnectorProfileCredentials } from "./amplitudeconnectorprofilecredentials";
import { CustomConnectorProfileCredentials } from "./customconnectorprofilecredentials";
import { DatadogConnectorProfileCredentials } from "./datadogconnectorprofilecredentials";
import { DynatraceConnectorProfileCredentials } from "./dynatraceconnectorprofilecredentials";
import { GoogleAnalyticsConnectorProfileCredentials } from "./googleanalyticsconnectorprofilecredentials";
import { HoneycodeConnectorProfileCredentials } from "./honeycodeconnectorprofilecredentials";
import { InforNexusConnectorProfileCredentials } from "./infornexusconnectorprofilecredentials";
import { MarketoConnectorProfileCredentials } from "./marketoconnectorprofilecredentials";
import { PardotConnectorProfileCredentials } from "./pardotconnectorprofilecredentials";
import { RedshiftConnectorProfileCredentials } from "./redshiftconnectorprofilecredentials";
import { SalesforceConnectorProfileCredentials } from "./salesforceconnectorprofilecredentials";
import { SAPODataConnectorProfileCredentials } from "./sapodataconnectorprofilecredentials";
import { ServiceNowConnectorProfileCredentials } from "./servicenowconnectorprofilecredentials";
import { SingularConnectorProfileCredentials } from "./singularconnectorprofilecredentials";
import { SlackConnectorProfileCredentials } from "./slackconnectorprofilecredentials";
import { SnowflakeConnectorProfileCredentials } from "./snowflakeconnectorprofilecredentials";
import { TrendmicroConnectorProfileCredentials } from "./trendmicroconnectorprofilecredentials";
import { VeevaConnectorProfileCredentials } from "./veevaconnectorprofilecredentials";
import { ZendeskConnectorProfileCredentials } from "./zendeskconnectorprofilecredentials";
/**
 *  The connector-specific credentials required by a connector.
 */
export declare class ConnectorProfileCredentials extends SpeakeasyBase {
    amplitude?: AmplitudeConnectorProfileCredentials;
    /**
     * The connector-specific profile credentials that are required when using the custom connector.
     */
    customConnector?: CustomConnectorProfileCredentials;
    datadog?: DatadogConnectorProfileCredentials;
    dynatrace?: DynatraceConnectorProfileCredentials;
    googleAnalytics?: GoogleAnalyticsConnectorProfileCredentials;
    honeycode?: HoneycodeConnectorProfileCredentials;
    inforNexus?: InforNexusConnectorProfileCredentials;
    marketo?: MarketoConnectorProfileCredentials;
    pardot?: PardotConnectorProfileCredentials;
    redshift?: RedshiftConnectorProfileCredentials;
    /**
     *  The connector-specific profile credentials required when using SAPOData.
     */
    sapoData?: SAPODataConnectorProfileCredentials;
    salesforce?: SalesforceConnectorProfileCredentials;
    serviceNow?: ServiceNowConnectorProfileCredentials;
    singular?: SingularConnectorProfileCredentials;
    slack?: SlackConnectorProfileCredentials;
    snowflake?: SnowflakeConnectorProfileCredentials;
    trendmicro?: TrendmicroConnectorProfileCredentials;
    veeva?: VeevaConnectorProfileCredentials;
    zendesk?: ZendeskConnectorProfileCredentials;
}
