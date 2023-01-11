package openapisdk.models.shared;


public enum TransferOptionEnum {
    IMPORT_("IMPORT"),
    EXPORT("EXPORT"),
    LOCAL_USE("LOCAL_USE");

    public final String value;

    private TransferOptionEnum(String value) {
        this.value = value;
    }
}
