package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SourceConnectorProperties
 *  Specifies the information that is required to query a particular connector. 
**/
public class SourceConnectorProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Amplitude")
    public AmplitudeSourceProperties amplitude;
    public SourceConnectorProperties withAmplitude(AmplitudeSourceProperties amplitude) {
        this.amplitude = amplitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Datadog")
    public DatadogSourceProperties datadog;
    public SourceConnectorProperties withDatadog(DatadogSourceProperties datadog) {
        this.datadog = datadog;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Dynatrace")
    public DynatraceSourceProperties dynatrace;
    public SourceConnectorProperties withDynatrace(DynatraceSourceProperties dynatrace) {
        this.dynatrace = dynatrace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GoogleAnalytics")
    public GoogleAnalyticsSourceProperties googleAnalytics;
    public SourceConnectorProperties withGoogleAnalytics(GoogleAnalyticsSourceProperties googleAnalytics) {
        this.googleAnalytics = googleAnalytics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InforNexus")
    public InforNexusSourceProperties inforNexus;
    public SourceConnectorProperties withInforNexus(InforNexusSourceProperties inforNexus) {
        this.inforNexus = inforNexus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Marketo")
    public MarketoSourceProperties marketo;
    public SourceConnectorProperties withMarketo(MarketoSourceProperties marketo) {
        this.marketo = marketo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3")
    public S3SourceProperties s3;
    public SourceConnectorProperties withS3(S3SourceProperties s3) {
        this.s3 = s3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SAPOData")
    public SapoDataSourceProperties sapoData;
    public SourceConnectorProperties withSapoData(SapoDataSourceProperties sapoData) {
        this.sapoData = sapoData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Salesforce")
    public SalesforceSourceProperties salesforce;
    public SourceConnectorProperties withSalesforce(SalesforceSourceProperties salesforce) {
        this.salesforce = salesforce;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceNow")
    public ServiceNowSourceProperties serviceNow;
    public SourceConnectorProperties withServiceNow(ServiceNowSourceProperties serviceNow) {
        this.serviceNow = serviceNow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Singular")
    public SingularSourceProperties singular;
    public SourceConnectorProperties withSingular(SingularSourceProperties singular) {
        this.singular = singular;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Slack")
    public SlackSourceProperties slack;
    public SourceConnectorProperties withSlack(SlackSourceProperties slack) {
        this.slack = slack;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Trendmicro")
    public TrendmicroSourceProperties trendmicro;
    public SourceConnectorProperties withTrendmicro(TrendmicroSourceProperties trendmicro) {
        this.trendmicro = trendmicro;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Veeva")
    public VeevaSourceProperties veeva;
    public SourceConnectorProperties withVeeva(VeevaSourceProperties veeva) {
        this.veeva = veeva;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Zendesk")
    public ZendeskSourceProperties zendesk;
    public SourceConnectorProperties withZendesk(ZendeskSourceProperties zendesk) {
        this.zendesk = zendesk;
        return this;
    }
}