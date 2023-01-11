package openapisdk.models.shared;


public enum FailureBehaviorEnum {
    FAIL("Fail"),
    CONTINUE_("Continue");

    public final String value;

    private FailureBehaviorEnum(String value) {
        this.value = value;
    }
}
