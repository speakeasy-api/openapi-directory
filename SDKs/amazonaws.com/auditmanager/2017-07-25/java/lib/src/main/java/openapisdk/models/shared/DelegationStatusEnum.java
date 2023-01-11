package openapisdk.models.shared;


public enum DelegationStatusEnum {
    IN_PROGRESS("IN_PROGRESS"),
    UNDER_REVIEW("UNDER_REVIEW"),
    COMPLETE("COMPLETE");

    public final String value;

    private DelegationStatusEnum(String value) {
        this.value = value;
    }
}
