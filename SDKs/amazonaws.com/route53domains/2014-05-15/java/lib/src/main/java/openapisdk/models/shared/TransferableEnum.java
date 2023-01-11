package openapisdk.models.shared;


public enum TransferableEnum {
    TRANSFERABLE("TRANSFERABLE"),
    UNTRANSFERABLE("UNTRANSFERABLE"),
    DONT_KNOW("DONT_KNOW");

    public final String value;

    private TransferableEnum(String value) {
        this.value = value;
    }
}
