package openapisdk.models.shared;


public enum CurationStatusEnum {
    PENDING("pending"),
    APPROVED("approved"),
    REJECTED("rejected"),
    CLOSED("closed");

    public final String value;

    private CurationStatusEnum(String value) {
        this.value = value;
    }
}
