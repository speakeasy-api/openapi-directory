package openapisdk.models.shared;


public enum OutputFormatEnum {
    JSON("JSON"),
    YAML("YAML");

    public final String value;

    private OutputFormatEnum(String value) {
        this.value = value;
    }
}
