package openapisdk.models.operations;


public enum WhoisFormatEnum {
    RAW("raw"),
    FORMATTED("formatted"),
    JSON("json");

    public final String value;

    private WhoisFormatEnum(String value) {
        this.value = value;
    }
}
