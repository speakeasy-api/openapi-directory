package openapisdk.models.shared;


public enum ReviewStatusEnum {
    PENDING("PENDING"),
    FAILED("FAILED"),
    GRANTED("GRANTED"),
    DENIED("DENIED");

    public final String value;

    private ReviewStatusEnum(String value) {
        this.value = value;
    }
}
