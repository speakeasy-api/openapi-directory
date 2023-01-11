package openapisdk.models.shared;


public enum DkimStatusEnum {
    PENDING("PENDING"),
    SUCCESS("SUCCESS"),
    FAILED("FAILED"),
    TEMPORARY_FAILURE("TEMPORARY_FAILURE"),
    NOT_STARTED("NOT_STARTED");

    public final String value;

    private DkimStatusEnum(String value) {
        this.value = value;
    }
}
