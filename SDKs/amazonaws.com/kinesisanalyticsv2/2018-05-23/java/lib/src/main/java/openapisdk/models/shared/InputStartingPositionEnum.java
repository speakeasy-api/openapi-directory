package openapisdk.models.shared;


public enum InputStartingPositionEnum {
    NOW("NOW"),
    TRIM_HORIZON("TRIM_HORIZON"),
    LAST_STOPPED_POINT("LAST_STOPPED_POINT");

    public final String value;

    private InputStartingPositionEnum(String value) {
        this.value = value;
    }
}
