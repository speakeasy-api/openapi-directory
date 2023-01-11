package openapisdk.models.shared;


public enum TaskTypeEnum {
    EVALUATION("EVALUATION"),
    LABELING_SET_GENERATION("LABELING_SET_GENERATION"),
    IMPORT_LABELS("IMPORT_LABELS"),
    EXPORT_LABELS("EXPORT_LABELS"),
    FIND_MATCHES("FIND_MATCHES");

    public final String value;

    private TaskTypeEnum(String value) {
        this.value = value;
    }
}
