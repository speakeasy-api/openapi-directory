package openapisdk.models.shared;


public enum WorkloadEnvironmentEnum {
    PRODUCTION("PRODUCTION"),
    PREPRODUCTION("PREPRODUCTION");

    public final String value;

    private WorkloadEnvironmentEnum(String value) {
        this.value = value;
    }
}
