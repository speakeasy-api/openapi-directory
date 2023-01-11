package openapisdk.models.shared;


public enum ModelStatusEnum {
    SUBMITTED("SUBMITTED"),
    TRAINING("TRAINING"),
    DELETING("DELETING"),
    STOP_REQUESTED("STOP_REQUESTED"),
    STOPPED("STOPPED"),
    IN_ERROR("IN_ERROR"),
    TRAINED("TRAINED");

    public final String value;

    private ModelStatusEnum(String value) {
        this.value = value;
    }
}
