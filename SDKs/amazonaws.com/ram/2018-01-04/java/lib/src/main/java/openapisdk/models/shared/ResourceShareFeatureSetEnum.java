package openapisdk.models.shared;


public enum ResourceShareFeatureSetEnum {
    CREATED_FROM_POLICY("CREATED_FROM_POLICY"),
    PROMOTING_TO_STANDARD("PROMOTING_TO_STANDARD"),
    STANDARD("STANDARD");

    public final String value;

    private ResourceShareFeatureSetEnum(String value) {
        this.value = value;
    }
}
