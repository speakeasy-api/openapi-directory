package openapisdk.models.shared;


public enum DialogStateEnum {
    ELICIT_INTENT("ElicitIntent"),
    CONFIRM_INTENT("ConfirmIntent"),
    ELICIT_SLOT("ElicitSlot"),
    FULFILLED("Fulfilled"),
    READY_FOR_FULFILLMENT("ReadyForFulfillment"),
    FAILED("Failed");

    public final String value;

    private DialogStateEnum(String value) {
        this.value = value;
    }
}
