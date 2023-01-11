package openapisdk.models.shared;


public enum HistoryItemTypeEnum {
    CONFIGURATION_UPDATE("ConfigurationUpdate"),
    STATE_UPDATE("StateUpdate"),
    ACTION("Action");

    public final String value;

    private HistoryItemTypeEnum(String value) {
        this.value = value;
    }
}
