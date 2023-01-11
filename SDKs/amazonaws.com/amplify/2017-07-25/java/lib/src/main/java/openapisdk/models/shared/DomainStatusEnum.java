package openapisdk.models.shared;


public enum DomainStatusEnum {
    PENDING_VERIFICATION("PENDING_VERIFICATION"),
    IN_PROGRESS("IN_PROGRESS"),
    AVAILABLE("AVAILABLE"),
    PENDING_DEPLOYMENT("PENDING_DEPLOYMENT"),
    FAILED("FAILED"),
    CREATING("CREATING"),
    REQUESTING_CERTIFICATE("REQUESTING_CERTIFICATE"),
    UPDATING("UPDATING");

    public final String value;

    private DomainStatusEnum(String value) {
        this.value = value;
    }
}
