package openapisdk.models.shared;


public enum EnvironmentAccountConnectionStatusEnum {
    PENDING("PENDING"),
    CONNECTED("CONNECTED"),
    REJECTED("REJECTED");

    public final String value;

    private EnvironmentAccountConnectionStatusEnum(String value) {
        this.value = value;
    }
}
