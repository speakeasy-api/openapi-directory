package openapisdk.models.shared;


public enum ReadWriteTypeEnum {
    READ_ONLY("ReadOnly"),
    WRITE_ONLY("WriteOnly"),
    ALL("All");

    public final String value;

    private ReadWriteTypeEnum(String value) {
        this.value = value;
    }
}
