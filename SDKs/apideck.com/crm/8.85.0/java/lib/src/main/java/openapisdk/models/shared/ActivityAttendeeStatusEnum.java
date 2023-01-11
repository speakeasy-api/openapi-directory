package openapisdk.models.shared;


public enum ActivityAttendeeStatusEnum {
    ACCEPTED("accepted"),
    TENTATIVE("tentative"),
    DECLINED("declined");

    public final String value;

    private ActivityAttendeeStatusEnum(String value) {
        this.value = value;
    }
}
