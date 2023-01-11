package openapisdk.models.shared;


public enum SearchResourcesSortAttributeNameEnum {
    ACCOUNT_ID("ACCOUNT_ID"),
    RESOURCE_NAME("RESOURCE_NAME"),
    S3_CLASSIFIABLE_OBJECT_COUNT("S3_CLASSIFIABLE_OBJECT_COUNT"),
    S3_CLASSIFIABLE_SIZE_IN_BYTES("S3_CLASSIFIABLE_SIZE_IN_BYTES");

    public final String value;

    private SearchResourcesSortAttributeNameEnum(String value) {
        this.value = value;
    }
}
