package openapisdk.models.shared;


public enum ThreatIntelIndicatorCategoryEnum {
    BACKDOOR("BACKDOOR"),
    CARD_STEALER("CARD_STEALER"),
    COMMAND_AND_CONTROL("COMMAND_AND_CONTROL"),
    DROP_SITE("DROP_SITE"),
    EXPLOIT_SITE("EXPLOIT_SITE"),
    KEYLOGGER("KEYLOGGER");

    public final String value;

    private ThreatIntelIndicatorCategoryEnum(String value) {
        this.value = value;
    }
}
