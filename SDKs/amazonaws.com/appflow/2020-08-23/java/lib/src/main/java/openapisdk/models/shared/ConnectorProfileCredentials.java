package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectorProfileCredentials
 *  The connector-specific credentials required by a connector. 
**/
public class ConnectorProfileCredentials {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Amplitude")
    public AmplitudeConnectorProfileCredentials amplitude;
    public ConnectorProfileCredentials withAmplitude(AmplitudeConnectorProfileCredentials amplitude) {
        this.amplitude = amplitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Datadog")
    public DatadogConnectorProfileCredentials datadog;
    public ConnectorProfileCredentials withDatadog(DatadogConnectorProfileCredentials datadog) {
        this.datadog = datadog;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Dynatrace")
    public DynatraceConnectorProfileCredentials dynatrace;
    public ConnectorProfileCredentials withDynatrace(DynatraceConnectorProfileCredentials dynatrace) {
        this.dynatrace = dynatrace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GoogleAnalytics")
    public GoogleAnalyticsConnectorProfileCredentials googleAnalytics;
    public ConnectorProfileCredentials withGoogleAnalytics(GoogleAnalyticsConnectorProfileCredentials googleAnalytics) {
        this.googleAnalytics = googleAnalytics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Honeycode")
    public HoneycodeConnectorProfileCredentials honeycode;
    public ConnectorProfileCredentials withHoneycode(HoneycodeConnectorProfileCredentials honeycode) {
        this.honeycode = honeycode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InforNexus")
    public InforNexusConnectorProfileCredentials inforNexus;
    public ConnectorProfileCredentials withInforNexus(InforNexusConnectorProfileCredentials inforNexus) {
        this.inforNexus = inforNexus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Marketo")
    public MarketoConnectorProfileCredentials marketo;
    public ConnectorProfileCredentials withMarketo(MarketoConnectorProfileCredentials marketo) {
        this.marketo = marketo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Redshift")
    public RedshiftConnectorProfileCredentials redshift;
    public ConnectorProfileCredentials withRedshift(RedshiftConnectorProfileCredentials redshift) {
        this.redshift = redshift;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SAPOData")
    public SapoDataConnectorProfileCredentials sapoData;
    public ConnectorProfileCredentials withSapoData(SapoDataConnectorProfileCredentials sapoData) {
        this.sapoData = sapoData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Salesforce")
    public SalesforceConnectorProfileCredentials salesforce;
    public ConnectorProfileCredentials withSalesforce(SalesforceConnectorProfileCredentials salesforce) {
        this.salesforce = salesforce;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceNow")
    public ServiceNowConnectorProfileCredentials serviceNow;
    public ConnectorProfileCredentials withServiceNow(ServiceNowConnectorProfileCredentials serviceNow) {
        this.serviceNow = serviceNow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Singular")
    public SingularConnectorProfileCredentials singular;
    public ConnectorProfileCredentials withSingular(SingularConnectorProfileCredentials singular) {
        this.singular = singular;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Slack")
    public SlackConnectorProfileCredentials slack;
    public ConnectorProfileCredentials withSlack(SlackConnectorProfileCredentials slack) {
        this.slack = slack;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Snowflake")
    public SnowflakeConnectorProfileCredentials snowflake;
    public ConnectorProfileCredentials withSnowflake(SnowflakeConnectorProfileCredentials snowflake) {
        this.snowflake = snowflake;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Trendmicro")
    public TrendmicroConnectorProfileCredentials trendmicro;
    public ConnectorProfileCredentials withTrendmicro(TrendmicroConnectorProfileCredentials trendmicro) {
        this.trendmicro = trendmicro;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Veeva")
    public VeevaConnectorProfileCredentials veeva;
    public ConnectorProfileCredentials withVeeva(VeevaConnectorProfileCredentials veeva) {
        this.veeva = veeva;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Zendesk")
    public ZendeskConnectorProfileCredentials zendesk;
    public ConnectorProfileCredentials withZendesk(ZendeskConnectorProfileCredentials zendesk) {
        this.zendesk = zendesk;
        return this;
    }
}