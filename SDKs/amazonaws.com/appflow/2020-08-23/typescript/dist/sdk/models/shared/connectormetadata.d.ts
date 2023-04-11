import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsMetadata } from "./googleanalyticsmetadata";
import { HoneycodeMetadata } from "./honeycodemetadata";
import { SalesforceMetadata } from "./salesforcemetadata";
import { SlackMetadata } from "./slackmetadata";
import { SnowflakeMetadata } from "./snowflakemetadata";
import { ZendeskMetadata } from "./zendeskmetadata";
/**
 *  A structure to specify connector-specific metadata such as <code>oAuthScopes</code>, <code>supportedRegions</code>, <code>privateLinkServiceUrl</code>, and so on.
 */
export declare class ConnectorMetadata extends SpeakeasyBase {
    amplitude?: Record<string, any>;
    customerProfiles?: Record<string, any>;
    datadog?: Record<string, any>;
    dynatrace?: Record<string, any>;
    eventBridge?: Record<string, any>;
    googleAnalytics?: GoogleAnalyticsMetadata;
    honeycode?: HoneycodeMetadata;
    inforNexus?: Record<string, any>;
    marketo?: Record<string, any>;
    pardot?: Record<string, any>;
    redshift?: Record<string, any>;
    s3?: Record<string, any>;
    /**
     *  The connector metadata specific to SAPOData.
     */
    sapoData?: Record<string, any>;
    salesforce?: SalesforceMetadata;
    serviceNow?: Record<string, any>;
    singular?: Record<string, any>;
    slack?: SlackMetadata;
    snowflake?: SnowflakeMetadata;
    trendmicro?: Record<string, any>;
    upsolver?: Record<string, any>;
    veeva?: Record<string, any>;
    zendesk?: ZendeskMetadata;
}
