package openapisdk.models.shared;


public enum SourceConnectorTypeEnum {
    SALESFORCE("Salesforce"),
    MARKETO("Marketo"),
    ZENDESK("Zendesk"),
    SERVICENOW("Servicenow"),
    S3("S3");

    public final String value;

    private SourceConnectorTypeEnum(String value) {
        this.value = value;
    }
}
