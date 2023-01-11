package openapisdk.models.shared;


public enum DataFormatEnum {
    CSV("CSV"),
    JSON("JSON");

    public final String value;

    private DataFormatEnum(String value) {
        this.value = value;
    }
}
