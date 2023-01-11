package openapisdk.models.shared;


public enum ReviewActionStatusEnum {
    INTENDED("Intended"),
    SUCCEEDED("Succeeded"),
    FAILED("Failed"),
    CANCELLED("Cancelled");

    public final String value;

    private ReviewActionStatusEnum(String value) {
        this.value = value;
    }
}
