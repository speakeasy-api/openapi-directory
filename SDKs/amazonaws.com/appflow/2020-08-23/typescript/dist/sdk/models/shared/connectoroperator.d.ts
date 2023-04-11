import { SpeakeasyBase } from "../../../internal/utils";
import { AmplitudeConnectorOperatorEnum } from "./amplitudeconnectoroperatorenum";
import { DatadogConnectorOperatorEnum } from "./datadogconnectoroperatorenum";
import { DynatraceConnectorOperatorEnum } from "./dynatraceconnectoroperatorenum";
import { GoogleAnalyticsConnectorOperatorEnum } from "./googleanalyticsconnectoroperatorenum";
import { InforNexusConnectorOperatorEnum } from "./infornexusconnectoroperatorenum";
import { MarketoConnectorOperatorEnum } from "./marketoconnectoroperatorenum";
import { OperatorEnum } from "./operatorenum";
import { PardotConnectorOperatorEnum } from "./pardotconnectoroperatorenum";
import { S3ConnectorOperatorEnum } from "./s3connectoroperatorenum";
import { SalesforceConnectorOperatorEnum } from "./salesforceconnectoroperatorenum";
import { SAPODataConnectorOperatorEnum } from "./sapodataconnectoroperatorenum";
import { ServiceNowConnectorOperatorEnum } from "./servicenowconnectoroperatorenum";
import { SingularConnectorOperatorEnum } from "./singularconnectoroperatorenum";
import { SlackConnectorOperatorEnum } from "./slackconnectoroperatorenum";
import { TrendmicroConnectorOperatorEnum } from "./trendmicroconnectoroperatorenum";
import { VeevaConnectorOperatorEnum } from "./veevaconnectoroperatorenum";
import { ZendeskConnectorOperatorEnum } from "./zendeskconnectoroperatorenum";
/**
 *  The operation to be performed on the provided source fields.
 */
export declare class ConnectorOperator extends SpeakeasyBase {
    amplitude?: AmplitudeConnectorOperatorEnum;
    customConnector?: OperatorEnum;
    datadog?: DatadogConnectorOperatorEnum;
    dynatrace?: DynatraceConnectorOperatorEnum;
    googleAnalytics?: GoogleAnalyticsConnectorOperatorEnum;
    inforNexus?: InforNexusConnectorOperatorEnum;
    marketo?: MarketoConnectorOperatorEnum;
    pardot?: PardotConnectorOperatorEnum;
    s3?: S3ConnectorOperatorEnum;
    sapoData?: SAPODataConnectorOperatorEnum;
    salesforce?: SalesforceConnectorOperatorEnum;
    serviceNow?: ServiceNowConnectorOperatorEnum;
    singular?: SingularConnectorOperatorEnum;
    slack?: SlackConnectorOperatorEnum;
    trendmicro?: TrendmicroConnectorOperatorEnum;
    veeva?: VeevaConnectorOperatorEnum;
    zendesk?: ZendeskConnectorOperatorEnum;
}
