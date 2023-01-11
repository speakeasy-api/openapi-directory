package openapisdk.models.shared;


public enum ActionCategoryEnum {
    SOURCE("Source"),
    BUILD("Build"),
    DEPLOY("Deploy"),
    TEST("Test"),
    INVOKE("Invoke"),
    APPROVAL("Approval");

    public final String value;

    private ActionCategoryEnum(String value) {
        this.value = value;
    }
}
