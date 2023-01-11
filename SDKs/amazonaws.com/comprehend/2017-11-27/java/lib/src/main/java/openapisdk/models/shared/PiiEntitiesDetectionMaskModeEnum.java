package openapisdk.models.shared;


public enum PiiEntitiesDetectionMaskModeEnum {
    MASK("MASK"),
    REPLACE_WITH_PII_ENTITY_TYPE("REPLACE_WITH_PII_ENTITY_TYPE");

    public final String value;

    private PiiEntitiesDetectionMaskModeEnum(String value) {
        this.value = value;
    }
}
