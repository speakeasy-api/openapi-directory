package openapisdk.models.shared;


public enum SessionStateEnum {
    ACTIVE("ACTIVE"),
    PENDING("PENDING"),
    EXPIRED("EXPIRED");

    public final String value;

    private SessionStateEnum(String value) {
        this.value = value;
    }
}
