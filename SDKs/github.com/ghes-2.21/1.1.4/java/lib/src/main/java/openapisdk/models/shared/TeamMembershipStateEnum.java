package openapisdk.models.shared;


public enum TeamMembershipStateEnum {
    ACTIVE("active"),
    PENDING("pending");

    public final String value;

    private TeamMembershipStateEnum(String value) {
        this.value = value;
    }
}
