package openapisdk.models.shared;


public enum OrgMembershipStateEnum {
    ACTIVE("active"),
    PENDING("pending");

    public final String value;

    private OrgMembershipStateEnum(String value) {
        this.value = value;
    }
}
