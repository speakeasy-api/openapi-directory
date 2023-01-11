package openapisdk.models.shared;


public enum DatasetTypeEnum {
    TARGET_TIME_SERIES("TARGET_TIME_SERIES"),
    RELATED_TIME_SERIES("RELATED_TIME_SERIES"),
    ITEM_METADATA("ITEM_METADATA");

    public final String value;

    private DatasetTypeEnum(String value) {
        this.value = value;
    }
}
