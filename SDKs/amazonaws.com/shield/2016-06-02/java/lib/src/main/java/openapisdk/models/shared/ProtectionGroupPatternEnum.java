package openapisdk.models.shared;


public enum ProtectionGroupPatternEnum {
    ALL("ALL"),
    ARBITRARY("ARBITRARY"),
    BY_RESOURCE_TYPE("BY_RESOURCE_TYPE");

    public final String value;

    private ProtectionGroupPatternEnum(String value) {
        this.value = value;
    }
}
