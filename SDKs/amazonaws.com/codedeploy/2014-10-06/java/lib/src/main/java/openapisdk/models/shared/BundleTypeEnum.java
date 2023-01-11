package openapisdk.models.shared;


public enum BundleTypeEnum {
    TAR("tar"),
    TGZ("tgz"),
    ZIP("zip"),
    YAML("YAML"),
    JSON("JSON");

    public final String value;

    private BundleTypeEnum(String value) {
        this.value = value;
    }
}
