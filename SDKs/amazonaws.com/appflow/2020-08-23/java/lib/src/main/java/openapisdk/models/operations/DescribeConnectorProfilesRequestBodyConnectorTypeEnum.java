package openapisdk.models.operations;


public enum DescribeConnectorProfilesRequestBodyConnectorTypeEnum {
    SALESFORCE("Salesforce"),
    SINGULAR("Singular"),
    SLACK("Slack"),
    REDSHIFT("Redshift"),
    S3("S3"),
    MARKETO("Marketo"),
    GOOGLEANALYTICS("Googleanalytics"),
    ZENDESK("Zendesk"),
    SERVICENOW("Servicenow"),
    DATADOG("Datadog"),
    TRENDMICRO("Trendmicro"),
    SNOWFLAKE("Snowflake"),
    DYNATRACE("Dynatrace"),
    INFORNEXUS("Infornexus"),
    AMPLITUDE("Amplitude"),
    VEEVA("Veeva"),
    EVENT_BRIDGE("EventBridge"),
    LOOKOUT_METRICS("LookoutMetrics"),
    UPSOLVER("Upsolver"),
    HONEYCODE("Honeycode"),
    CUSTOMER_PROFILES("CustomerProfiles"),
    SAPO_DATA("SAPOData");

    public final String value;

    private DescribeConnectorProfilesRequestBodyConnectorTypeEnum(String value) {
        this.value = value;
    }
}
