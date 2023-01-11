package openapisdk.models.shared;


public enum EntityStatusEnum {
    PENDING("PENDING"),
    INPROGRESS("INPROGRESS"),
    FAILED("FAILED"),
    COMPLETED("COMPLETED"),
    DELETED("DELETED");

    public final String value;

    private EntityStatusEnum(String value) {
        this.value = value;
    }
}
