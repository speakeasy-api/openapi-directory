package openapisdk.models.shared;


public enum SourceTypeEnum {
    AWS_CLOUDTRAIL("AWS_Cloudtrail"),
    AWS_CONFIG("AWS_Config"),
    AWS_SECURITY_HUB("AWS_Security_Hub"),
    AWS_API_CALL("AWS_API_Call"),
    MANUAL("MANUAL");

    public final String value;

    private SourceTypeEnum(String value) {
        this.value = value;
    }
}
