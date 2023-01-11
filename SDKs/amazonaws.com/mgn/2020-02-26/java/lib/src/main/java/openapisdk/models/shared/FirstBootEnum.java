package openapisdk.models.shared;


public enum FirstBootEnum {
    WAITING("WAITING"),
    SUCCEEDED("SUCCEEDED"),
    UNKNOWN("UNKNOWN"),
    STOPPED("STOPPED");

    public final String value;

    private FirstBootEnum(String value) {
        this.value = value;
    }
}
