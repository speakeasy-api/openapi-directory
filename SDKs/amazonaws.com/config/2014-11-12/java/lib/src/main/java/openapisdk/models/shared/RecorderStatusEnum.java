package openapisdk.models.shared;


public enum RecorderStatusEnum {
    PENDING("Pending"),
    SUCCESS("Success"),
    FAILURE("Failure");

    public final String value;

    private RecorderStatusEnum(String value) {
        this.value = value;
    }
}
