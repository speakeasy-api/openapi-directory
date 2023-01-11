package openapisdk.models.shared;


public enum CloseStatusEnum {
    COMPLETED("COMPLETED"),
    FAILED("FAILED"),
    CANCELED("CANCELED"),
    TERMINATED("TERMINATED"),
    CONTINUED_AS_NEW("CONTINUED_AS_NEW"),
    TIMED_OUT("TIMED_OUT");

    public final String value;

    private CloseStatusEnum(String value) {
        this.value = value;
    }
}
