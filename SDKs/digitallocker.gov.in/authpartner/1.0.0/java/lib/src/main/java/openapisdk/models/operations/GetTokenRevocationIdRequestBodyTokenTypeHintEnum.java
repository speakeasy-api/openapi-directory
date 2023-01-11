package openapisdk.models.operations;


public enum GetTokenRevocationIdRequestBodyTokenTypeHintEnum {
    REFRESH_TOKEN("refresh_token"),
    ACCESS_TOKEN("access_token");

    public final String value;

    private GetTokenRevocationIdRequestBodyTokenTypeHintEnum(String value) {
        this.value = value;
    }
}
