package openapisdk.models.shared;


public enum UserStatusTypeEnum {
    UNCONFIRMED("UNCONFIRMED"),
    CONFIRMED("CONFIRMED"),
    ARCHIVED("ARCHIVED"),
    COMPROMISED("COMPROMISED"),
    UNKNOWN("UNKNOWN"),
    RESET_REQUIRED("RESET_REQUIRED"),
    FORCE_CHANGE_PASSWORD("FORCE_CHANGE_PASSWORD");

    public final String value;

    private UserStatusTypeEnum(String value) {
        this.value = value;
    }
}
