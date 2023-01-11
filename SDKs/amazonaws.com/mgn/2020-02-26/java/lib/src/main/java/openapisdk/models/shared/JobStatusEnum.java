package openapisdk.models.shared;


public enum JobStatusEnum {
    PENDING("PENDING"),
    STARTED("STARTED"),
    COMPLETED("COMPLETED");

    public final String value;

    private JobStatusEnum(String value) {
        this.value = value;
    }
}
