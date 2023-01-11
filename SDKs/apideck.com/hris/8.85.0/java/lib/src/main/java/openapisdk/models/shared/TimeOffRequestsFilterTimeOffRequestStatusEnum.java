package openapisdk.models.shared;


public enum TimeOffRequestsFilterTimeOffRequestStatusEnum {
    REQUESTED("requested"),
    APPROVED("approved"),
    DECLINED("declined"),
    CANCELLED("cancelled"),
    DELETED("deleted"),
    OTHER("other");

    public final String value;

    private TimeOffRequestsFilterTimeOffRequestStatusEnum(String value) {
        this.value = value;
    }
}
