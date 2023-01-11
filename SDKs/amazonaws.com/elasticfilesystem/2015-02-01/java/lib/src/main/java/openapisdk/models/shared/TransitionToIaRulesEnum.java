package openapisdk.models.shared;


public enum TransitionToIaRulesEnum {
    AFTER7_DAYS("AFTER_7_DAYS"),
    AFTER14_DAYS("AFTER_14_DAYS"),
    AFTER30_DAYS("AFTER_30_DAYS"),
    AFTER60_DAYS("AFTER_60_DAYS"),
    AFTER90_DAYS("AFTER_90_DAYS");

    public final String value;

    private TransitionToIaRulesEnum(String value) {
        this.value = value;
    }
}
