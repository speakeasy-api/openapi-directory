package openapisdk.models.operations;


public enum UpdateIntegrationRequestBodyIntegrationTypeEnum {
    AWS("AWS"),
    HTTP("HTTP"),
    MOCK("MOCK"),
    HTTP_PROXY("HTTP_PROXY"),
    AWS_PROXY("AWS_PROXY");

    public final String value;

    private UpdateIntegrationRequestBodyIntegrationTypeEnum(String value) {
        this.value = value;
    }
}
