package openapisdk.models.operations;


public enum CreateIntegrationRequestBodyPassthroughBehaviorEnum {
    WHEN_NO_MATCH("WHEN_NO_MATCH"),
    NEVER("NEVER"),
    WHEN_NO_TEMPLATES("WHEN_NO_TEMPLATES");

    public final String value;

    private CreateIntegrationRequestBodyPassthroughBehaviorEnum(String value) {
        this.value = value;
    }
}
