package openapisdk.models.shared;


public enum DocumentClassifierModeEnum {
    MULTI_CLASS("MULTI_CLASS"),
    MULTI_LABEL("MULTI_LABEL");

    public final String value;

    private DocumentClassifierModeEnum(String value) {
        this.value = value;
    }
}
