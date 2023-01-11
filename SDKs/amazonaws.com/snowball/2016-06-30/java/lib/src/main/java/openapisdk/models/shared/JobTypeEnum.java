package openapisdk.models.shared;


public enum JobTypeEnum {
    IMPORT_("IMPORT"),
    EXPORT("EXPORT"),
    LOCAL_USE("LOCAL_USE");

    public final String value;

    private JobTypeEnum(String value) {
        this.value = value;
    }
}
