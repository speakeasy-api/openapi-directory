package openapisdk.models.operations;


public enum ListImagesRequestBodyOwnerEnum {
    SELF("Self"),
    SHARED("Shared"),
    AMAZON("Amazon");

    public final String value;

    private ListImagesRequestBodyOwnerEnum(String value) {
        this.value = value;
    }
}
