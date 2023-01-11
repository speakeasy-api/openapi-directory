package openapisdk.models.shared;


public enum ActionEnum {
    ALLOW("ALLOW"),
    BLOCK("BLOCK"),
    ALERT("ALERT");

    public final String value;

    private ActionEnum(String value) {
        this.value = value;
    }
}
