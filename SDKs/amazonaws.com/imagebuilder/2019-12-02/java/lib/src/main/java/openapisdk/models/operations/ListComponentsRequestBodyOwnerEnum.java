package openapisdk.models.operations;


public enum ListComponentsRequestBodyOwnerEnum {
    SELF("Self"),
    SHARED("Shared"),
    AMAZON("Amazon");

    public final String value;

    private ListComponentsRequestBodyOwnerEnum(String value) {
        this.value = value;
    }
}
