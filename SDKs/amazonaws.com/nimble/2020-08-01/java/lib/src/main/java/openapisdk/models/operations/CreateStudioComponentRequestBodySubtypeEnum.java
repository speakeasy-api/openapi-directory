package openapisdk.models.operations;


public enum CreateStudioComponentRequestBodySubtypeEnum {
    AWS_MANAGED_MICROSOFT_AD("AWS_MANAGED_MICROSOFT_AD"),
    AMAZON_FSX_FOR_WINDOWS("AMAZON_FSX_FOR_WINDOWS"),
    AMAZON_FSX_FOR_LUSTRE("AMAZON_FSX_FOR_LUSTRE"),
    CUSTOM("CUSTOM");

    public final String value;

    private CreateStudioComponentRequestBodySubtypeEnum(String value) {
        this.value = value;
    }
}
