package openapisdk.models.shared;


public enum FrequencyEnum {
    ONCE("ONCE"),
    HOURLY("HOURLY"),
    DAILY("DAILY"),
    WEEKLY("WEEKLY"),
    MONTHLY("MONTHLY"),
    EVENT("EVENT"),
    IN_APP_EVENT("IN_APP_EVENT");

    public final String value;

    private FrequencyEnum(String value) {
        this.value = value;
    }
}
