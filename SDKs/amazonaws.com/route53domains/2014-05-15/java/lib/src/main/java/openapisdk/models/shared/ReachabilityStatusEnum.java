package openapisdk.models.shared;


public enum ReachabilityStatusEnum {
    PENDING("PENDING"),
    DONE("DONE"),
    EXPIRED("EXPIRED");

    public final String value;

    private ReachabilityStatusEnum(String value) {
        this.value = value;
    }
}
