package openapisdk.models.shared;


public enum AccessPreviewStatusEnum {
    COMPLETED("COMPLETED"),
    CREATING("CREATING"),
    FAILED("FAILED");

    public final String value;

    private AccessPreviewStatusEnum(String value) {
        this.value = value;
    }
}
