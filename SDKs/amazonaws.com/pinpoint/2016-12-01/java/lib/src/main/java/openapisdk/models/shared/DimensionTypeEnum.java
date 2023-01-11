package openapisdk.models.shared;


public enum DimensionTypeEnum {
    INCLUSIVE("INCLUSIVE"),
    EXCLUSIVE("EXCLUSIVE");

    public final String value;

    private DimensionTypeEnum(String value) {
        this.value = value;
    }
}
