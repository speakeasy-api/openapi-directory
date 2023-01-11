package openapisdk.models.shared;


public enum DeliveryStatusEnum {
    SUCCESS("Success"),
    FAILURE("Failure"),
    NOT_APPLICABLE("Not_Applicable");

    public final String value;

    private DeliveryStatusEnum(String value) {
        this.value = value;
    }
}
