package openapisdk.models.shared;


public enum PortStateEnum {
    OPEN("open"),
    CLOSED("closed");

    public final String value;

    private PortStateEnum(String value) {
        this.value = value;
    }
}
