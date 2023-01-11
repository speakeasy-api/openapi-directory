package openapisdk.models.shared;


public enum GeoRestrictionTypeEnum {
    BLACKLIST("blacklist"),
    WHITELIST("whitelist"),
    NONE("none");

    public final String value;

    private GeoRestrictionTypeEnum(String value) {
        this.value = value;
    }
}
