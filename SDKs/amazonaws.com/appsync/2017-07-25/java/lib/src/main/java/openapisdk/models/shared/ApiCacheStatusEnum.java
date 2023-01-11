package openapisdk.models.shared;


public enum ApiCacheStatusEnum {
    AVAILABLE("AVAILABLE"),
    CREATING("CREATING"),
    DELETING("DELETING"),
    MODIFYING("MODIFYING"),
    FAILED("FAILED");

    public final String value;

    private ApiCacheStatusEnum(String value) {
        this.value = value;
    }
}
