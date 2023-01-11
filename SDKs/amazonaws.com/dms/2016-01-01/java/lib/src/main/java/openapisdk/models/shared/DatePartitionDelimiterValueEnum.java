package openapisdk.models.shared;


public enum DatePartitionDelimiterValueEnum {
    SLASH("SLASH"),
    UNDERSCORE("UNDERSCORE"),
    DASH("DASH"),
    NONE("NONE");

    public final String value;

    private DatePartitionDelimiterValueEnum(String value) {
        this.value = value;
    }
}
