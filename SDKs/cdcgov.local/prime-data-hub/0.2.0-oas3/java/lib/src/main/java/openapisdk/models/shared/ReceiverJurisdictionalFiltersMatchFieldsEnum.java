package openapisdk.models.shared;


public enum ReceiverJurisdictionalFiltersMatchFieldsEnum {
    FACILITY_OR_PATIENT_ADDRESS("FACILITY_OR_PATIENT_ADDRESS"),
    FACILITY_ADDRESS("FACILITY_ADDRESS"),
    FACILITY_NAME("FACILITY_NAME"),
    ABNORMAL_VALUE("ABNORMAL_VALUE");

    public final String value;

    private ReceiverJurisdictionalFiltersMatchFieldsEnum(String value) {
        this.value = value;
    }
}
