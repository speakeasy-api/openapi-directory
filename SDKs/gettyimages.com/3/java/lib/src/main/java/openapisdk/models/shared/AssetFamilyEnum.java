package openapisdk.models.shared;


public enum AssetFamilyEnum {
    NOT_SET("NotSet"),
    EDITORIAL("Editorial"),
    CREATIVE("Creative"),
    BOTH("Both");

    public final String value;

    private AssetFamilyEnum(String value) {
        this.value = value;
    }
}
