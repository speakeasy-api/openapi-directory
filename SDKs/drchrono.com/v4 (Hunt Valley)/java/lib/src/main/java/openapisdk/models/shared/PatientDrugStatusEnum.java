package openapisdk.models.shared;


public enum PatientDrugStatusEnum {
    ACTIVE("active"),
    INACTIVE("inactive");

    public final String value;

    private PatientDrugStatusEnum(String value) {
        this.value = value;
    }
}
