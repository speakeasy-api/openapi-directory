package openapisdk.models.shared;


public enum DocumentReadModeEnum {
    SERVICE_DEFAULT("SERVICE_DEFAULT"),
    FORCE_DOCUMENT_READ_ACTION("FORCE_DOCUMENT_READ_ACTION");

    public final String value;

    private DocumentReadModeEnum(String value) {
        this.value = value;
    }
}
