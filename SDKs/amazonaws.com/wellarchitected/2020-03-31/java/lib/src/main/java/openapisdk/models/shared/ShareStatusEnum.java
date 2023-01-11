package openapisdk.models.shared;


public enum ShareStatusEnum {
    ACCEPTED("ACCEPTED"),
    REJECTED("REJECTED"),
    PENDING("PENDING"),
    REVOKED("REVOKED"),
    EXPIRED("EXPIRED");

    public final String value;

    private ShareStatusEnum(String value) {
        this.value = value;
    }
}
