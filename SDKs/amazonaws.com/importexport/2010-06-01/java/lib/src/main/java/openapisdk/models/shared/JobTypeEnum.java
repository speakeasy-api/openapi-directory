package openapisdk.models.shared;


public enum JobTypeEnum {
    IMPORT_("Import"),
    EXPORT("Export");

    public final String value;

    private JobTypeEnum(String value) {
        this.value = value;
    }
}
