package openapisdk.models.shared;


public enum PrefixFormatEnum {
    YEAR("YEAR"),
    MONTH("MONTH"),
    DAY("DAY"),
    HOUR("HOUR"),
    MINUTE("MINUTE");

    public final String value;

    private PrefixFormatEnum(String value) {
        this.value = value;
    }
}
