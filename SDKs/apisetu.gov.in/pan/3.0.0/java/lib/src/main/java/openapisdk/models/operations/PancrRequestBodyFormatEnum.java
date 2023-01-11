package openapisdk.models.operations;


public enum PancrRequestBodyFormatEnum {
    XML("xml"),
    PDF("pdf");

    public final String value;

    private PancrRequestBodyFormatEnum(String value) {
        this.value = value;
    }
}
