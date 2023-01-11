package openapisdk.models.shared;


public enum ShareStatusEnum {
    SHARED("Shared"),
    PENDING_ACCEPTANCE("PendingAcceptance"),
    REJECTED("Rejected"),
    REJECTING("Rejecting"),
    REJECT_FAILED("RejectFailed"),
    SHARING("Sharing"),
    SHARE_FAILED("ShareFailed"),
    DELETED("Deleted"),
    DELETING("Deleting");

    public final String value;

    private ShareStatusEnum(String value) {
        this.value = value;
    }
}
