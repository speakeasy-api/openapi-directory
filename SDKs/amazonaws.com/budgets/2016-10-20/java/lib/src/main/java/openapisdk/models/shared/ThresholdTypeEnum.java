package openapisdk.models.shared;


public enum ThresholdTypeEnum {
    PERCENTAGE("PERCENTAGE"),
    ABSOLUTE_VALUE("ABSOLUTE_VALUE");

    public final String value;

    private ThresholdTypeEnum(String value) {
        this.value = value;
    }
}
