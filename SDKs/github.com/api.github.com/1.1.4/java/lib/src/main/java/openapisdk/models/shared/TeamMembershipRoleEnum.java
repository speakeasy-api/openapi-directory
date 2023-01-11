package openapisdk.models.shared;


public enum TeamMembershipRoleEnum {
    MEMBER("member"),
    MAINTAINER("maintainer");

    public final String value;

    private TeamMembershipRoleEnum(String value) {
        this.value = value;
    }
}
