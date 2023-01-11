package openapisdk.models.shared;


public enum ResourceShareInvitationStatusEnum {
    PENDING("PENDING"),
    ACCEPTED("ACCEPTED"),
    REJECTED("REJECTED"),
    EXPIRED("EXPIRED");

    public final String value;

    private ResourceShareInvitationStatusEnum(String value) {
        this.value = value;
    }
}
