package openapisdk.models.shared;


public enum ResourceBucketAccessEnum {
    ALLOW("allow"),
    DENY("deny");

    public final String value;

    private ResourceBucketAccessEnum(String value) {
        this.value = value;
    }
}
