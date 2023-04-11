import { SpeakeasyBase } from "../../../internal/utils";
import { AmplitudeSourceProperties } from "./amplitudesourceproperties";
import { CustomConnectorSourceProperties } from "./customconnectorsourceproperties";
import { DatadogSourceProperties } from "./datadogsourceproperties";
import { DynatraceSourceProperties } from "./dynatracesourceproperties";
import { GoogleAnalyticsSourceProperties } from "./googleanalyticssourceproperties";
import { InforNexusSourceProperties } from "./infornexussourceproperties";
import { MarketoSourceProperties } from "./marketosourceproperties";
import { PardotSourceProperties } from "./pardotsourceproperties";
import { S3SourceProperties } from "./s3sourceproperties";
import { SalesforceSourceProperties } from "./salesforcesourceproperties";
import { SAPODataSourceProperties } from "./sapodatasourceproperties";
import { ServiceNowSourceProperties } from "./servicenowsourceproperties";
import { SingularSourceProperties } from "./singularsourceproperties";
import { SlackSourceProperties } from "./slacksourceproperties";
import { TrendmicroSourceProperties } from "./trendmicrosourceproperties";
import { VeevaSourceProperties } from "./veevasourceproperties";
import { ZendeskSourceProperties } from "./zendesksourceproperties";
/**
 *  Specifies the information that is required to query a particular connector.
 */
export declare class SourceConnectorProperties extends SpeakeasyBase {
    amplitude?: AmplitudeSourceProperties;
    /**
     * The properties that are applied when the custom connector is being used as a source.
     */
    customConnector?: CustomConnectorSourceProperties;
    datadog?: DatadogSourceProperties;
    dynatrace?: DynatraceSourceProperties;
    googleAnalytics?: GoogleAnalyticsSourceProperties;
    inforNexus?: InforNexusSourceProperties;
    marketo?: MarketoSourceProperties;
    pardot?: PardotSourceProperties;
    s3?: S3SourceProperties;
    /**
     *  The properties that are applied when using SAPOData as a flow source.
     */
    sapoData?: SAPODataSourceProperties;
    salesforce?: SalesforceSourceProperties;
    serviceNow?: ServiceNowSourceProperties;
    singular?: SingularSourceProperties;
    slack?: SlackSourceProperties;
    trendmicro?: TrendmicroSourceProperties;
    veeva?: VeevaSourceProperties;
    zendesk?: ZendeskSourceProperties;
}
