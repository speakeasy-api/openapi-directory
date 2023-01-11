package openapisdk.models.shared;


public enum CurationDetailStatusEnum {
    PENDING("pending"),
    APPROVED("approved"),
    REJECTED("rejected"),
    CLOSED("closed");

    public final String value;

    private CurationDetailStatusEnum(String value) {
        this.value = value;
    }
}
