package openapisdk.models.shared;


public enum OutputUnitsEnum {
    METRIC("metric"),
    IMPERIAL("imperial");

    public final String value;

    private OutputUnitsEnum(String value) {
        this.value = value;
    }
}
