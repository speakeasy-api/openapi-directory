package openapisdk.models.shared;


public enum WebhookBuildTypeEnum {
    BUILD("BUILD"),
    BUILD_BATCH("BUILD_BATCH");

    public final String value;

    private WebhookBuildTypeEnum(String value) {
        this.value = value;
    }
}
