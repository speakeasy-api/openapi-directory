package openapisdk.models.shared;


public enum EnvironmentHealthStatusEnum {
    NO_DATA("NoData"),
    UNKNOWN("Unknown"),
    PENDING("Pending"),
    OK("Ok"),
    INFO("Info"),
    WARNING("Warning"),
    DEGRADED("Degraded"),
    SEVERE("Severe"),
    SUSPENDED("Suspended");

    public final String value;

    private EnvironmentHealthStatusEnum(String value) {
        this.value = value;
    }
}
