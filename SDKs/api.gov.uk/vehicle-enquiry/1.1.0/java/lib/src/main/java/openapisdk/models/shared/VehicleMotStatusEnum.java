package openapisdk.models.shared;


public enum VehicleMotStatusEnum {
    NO_DETAILS_HELD_BY_DVLA("No details held by DVLA"),
    NO_RESULTS_RETURNED("No results returned"),
    NOT_VALID("Not valid"),
    VALID("Valid");

    public final String value;

    private VehicleMotStatusEnum(String value) {
        this.value = value;
    }
}
