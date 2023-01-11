package openapisdk.models.shared;


public enum OptionStateEnum {
    REQUIRES_INDEX_DOCUMENTS("RequiresIndexDocuments"),
    PROCESSING("Processing"),
    ACTIVE("Active");

    public final String value;

    private OptionStateEnum(String value) {
        this.value = value;
    }
}
