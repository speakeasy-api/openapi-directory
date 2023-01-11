package openapisdk.models.operations;


public enum ListKeywordsForDataSourceSourceEnum {
    AWS_CLOUDTRAIL("AWS_Cloudtrail"),
    AWS_CONFIG("AWS_Config"),
    AWS_SECURITY_HUB("AWS_Security_Hub"),
    AWS_API_CALL("AWS_API_Call"),
    MANUAL("MANUAL");

    public final String value;

    private ListKeywordsForDataSourceSourceEnum(String value) {
        this.value = value;
    }
}
