package openapisdk.models.operations;


public enum GovidRequestBodyFormatEnum {
    XML("xml"),
    PDF("pdf");

    public final String value;

    private GovidRequestBodyFormatEnum(String value) {
        this.value = value;
    }
}
