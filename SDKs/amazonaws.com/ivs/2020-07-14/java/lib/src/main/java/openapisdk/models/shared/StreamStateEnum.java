package openapisdk.models.shared;


public enum StreamStateEnum {
    LIVE("LIVE"),
    OFFLINE("OFFLINE");

    public final String value;

    private StreamStateEnum(String value) {
        this.value = value;
    }
}
