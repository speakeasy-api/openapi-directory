package openapisdk.models.shared;


public enum DialogActionTypeEnum {
    ELICIT_INTENT("ElicitIntent"),
    CONFIRM_INTENT("ConfirmIntent"),
    ELICIT_SLOT("ElicitSlot"),
    CLOSE("Close"),
    DELEGATE("Delegate");

    public final String value;

    private DialogActionTypeEnum(String value) {
        this.value = value;
    }
}
