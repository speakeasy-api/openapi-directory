package openapisdk.models.shared;


public enum PatientProblemStatusEnum {
    ACTIVE("active"),
    INACTIVE("inactive"),
    RESOLVED("resolved");

    public final String value;

    private PatientProblemStatusEnum(String value) {
        this.value = value;
    }
}
