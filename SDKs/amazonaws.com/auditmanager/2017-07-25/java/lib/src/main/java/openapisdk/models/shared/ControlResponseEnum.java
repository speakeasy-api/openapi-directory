package openapisdk.models.shared;


public enum ControlResponseEnum {
    MANUAL("MANUAL"),
    AUTOMATE("AUTOMATE"),
    DEFER("DEFER"),
    IGNORE("IGNORE");

    public final String value;

    private ControlResponseEnum(String value) {
        this.value = value;
    }
}
