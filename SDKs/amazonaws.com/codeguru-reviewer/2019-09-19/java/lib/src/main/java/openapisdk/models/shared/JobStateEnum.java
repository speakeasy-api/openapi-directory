package openapisdk.models.shared;


public enum JobStateEnum {
    COMPLETED("Completed"),
    PENDING("Pending"),
    FAILED("Failed"),
    DELETING("Deleting");

    public final String value;

    private JobStateEnum(String value) {
        this.value = value;
    }
}
