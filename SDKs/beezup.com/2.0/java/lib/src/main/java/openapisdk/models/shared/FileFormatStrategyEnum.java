package openapisdk.models.shared;


public enum FileFormatStrategyEnum {
    UNKNOWN("Unknown"),
    CSV("Csv"),
    XML("Xml"),
    JSON("Json");

    public final String value;

    private FileFormatStrategyEnum(String value) {
        this.value = value;
    }
}
