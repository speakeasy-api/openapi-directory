package openapisdk.models.shared;


public enum StopStatusEnum {
    PENDING("Pending"),
    SUCCEEDED("Succeeded");

    public final String value;

    private StopStatusEnum(String value) {
        this.value = value;
    }
}
