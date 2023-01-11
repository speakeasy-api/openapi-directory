package openapisdk.models.shared;


public enum ExitBehaviorEnum {
    FAIL("FAIL"),
    RESTART("RESTART");

    public final String value;

    private ExitBehaviorEnum(String value) {
        this.value = value;
    }
}
