package openapisdk.models.shared;


public enum TimeOffRequestStatusEnum {
    REQUESTED("requested"),
    APPROVED("approved"),
    DECLINED("declined"),
    CANCELLED("cancelled"),
    DELETED("deleted"),
    OTHER("other");

    public final String value;

    private TimeOffRequestStatusEnum(String value) {
        this.value = value;
    }
}
