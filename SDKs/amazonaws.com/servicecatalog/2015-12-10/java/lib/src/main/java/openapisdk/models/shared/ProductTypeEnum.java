package openapisdk.models.shared;


public enum ProductTypeEnum {
    CLOUD_FORMATION_TEMPLATE("CLOUD_FORMATION_TEMPLATE"),
    MARKETPLACE("MARKETPLACE");

    public final String value;

    private ProductTypeEnum(String value) {
        this.value = value;
    }
}
