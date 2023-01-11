package openapisdk.models.shared;


public enum TimeOffRequestRequestTypeEnum {
    VACATION("vacation"),
    SICK("sick"),
    PERSONAL("personal"),
    JURY_DUTY("jury_duty"),
    VOLUNTEER("volunteer"),
    BEREAVEMENT("bereavement"),
    OTHER("other");

    public final String value;

    private TimeOffRequestRequestTypeEnum(String value) {
        this.value = value;
    }
}
