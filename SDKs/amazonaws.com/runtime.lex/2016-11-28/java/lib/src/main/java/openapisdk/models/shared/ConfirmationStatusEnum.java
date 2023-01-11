package openapisdk.models.shared;


public enum ConfirmationStatusEnum {
    NONE("None"),
    CONFIRMED("Confirmed"),
    DENIED("Denied");

    public final String value;

    private ConfirmationStatusEnum(String value) {
        this.value = value;
    }
}
