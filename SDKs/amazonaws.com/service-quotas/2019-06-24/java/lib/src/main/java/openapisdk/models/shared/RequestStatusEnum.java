package openapisdk.models.shared;


public enum RequestStatusEnum {
    PENDING("PENDING"),
    CASE_OPENED("CASE_OPENED"),
    APPROVED("APPROVED"),
    DENIED("DENIED"),
    CASE_CLOSED("CASE_CLOSED");

    public final String value;

    private RequestStatusEnum(String value) {
        this.value = value;
    }
}
