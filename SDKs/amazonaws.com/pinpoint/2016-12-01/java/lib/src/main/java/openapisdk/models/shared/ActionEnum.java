package openapisdk.models.shared;


public enum ActionEnum {
    OPEN_APP("OPEN_APP"),
    DEEP_LINK("DEEP_LINK"),
    URL("URL");

    public final String value;

    private ActionEnum(String value) {
        this.value = value;
    }
}
