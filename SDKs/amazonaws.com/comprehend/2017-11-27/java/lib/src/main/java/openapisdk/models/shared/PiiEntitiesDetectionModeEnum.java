package openapisdk.models.shared;


public enum PiiEntitiesDetectionModeEnum {
    ONLY_REDACTION("ONLY_REDACTION"),
    ONLY_OFFSETS("ONLY_OFFSETS");

    public final String value;

    private PiiEntitiesDetectionModeEnum(String value) {
        this.value = value;
    }
}
