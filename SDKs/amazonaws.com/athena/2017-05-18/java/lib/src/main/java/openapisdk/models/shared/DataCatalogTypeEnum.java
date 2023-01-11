package openapisdk.models.shared;


public enum DataCatalogTypeEnum {
    LAMBDA("LAMBDA"),
    GLUE("GLUE"),
    HIVE("HIVE");

    public final String value;

    private DataCatalogTypeEnum(String value) {
        this.value = value;
    }
}
