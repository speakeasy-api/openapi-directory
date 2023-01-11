package openapisdk.models.shared;


public enum RelationshipStatusEnum {
    ENABLED("Enabled"),
    PAUSED("Paused"),
    INVITED("Invited"),
    CREATED("Created"),
    REMOVED("Removed"),
    RESIGNED("Resigned"),
    EMAIL_VERIFICATION_IN_PROGRESS("EmailVerificationInProgress"),
    EMAIL_VERIFICATION_FAILED("EmailVerificationFailed"),
    REGION_DISABLED("RegionDisabled"),
    ACCOUNT_SUSPENDED("AccountSuspended");

    public final String value;

    private RelationshipStatusEnum(String value) {
        this.value = value;
    }
}
