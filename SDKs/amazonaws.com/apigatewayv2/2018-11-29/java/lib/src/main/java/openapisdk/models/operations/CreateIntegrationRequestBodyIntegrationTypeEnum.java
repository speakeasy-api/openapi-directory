package openapisdk.models.operations;


public enum CreateIntegrationRequestBodyIntegrationTypeEnum {
    AWS("AWS"),
    HTTP("HTTP"),
    MOCK("MOCK"),
    HTTP_PROXY("HTTP_PROXY"),
    AWS_PROXY("AWS_PROXY");

    public final String value;

    private CreateIntegrationRequestBodyIntegrationTypeEnum(String value) {
        this.value = value;
    }
}
