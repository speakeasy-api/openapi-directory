package openapisdk.models.shared;


public enum MemberStatusEnum {
    INVITED("INVITED"),
    VERIFICATION_IN_PROGRESS("VERIFICATION_IN_PROGRESS"),
    VERIFICATION_FAILED("VERIFICATION_FAILED"),
    ENABLED("ENABLED"),
    ACCEPTED_BUT_DISABLED("ACCEPTED_BUT_DISABLED");

    public final String value;

    private MemberStatusEnum(String value) {
        this.value = value;
    }
}
