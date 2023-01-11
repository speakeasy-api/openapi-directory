package openapisdk.models.shared;


public enum AuditFindingSeverityEnum {
    CRITICAL("CRITICAL"),
    HIGH("HIGH"),
    MEDIUM("MEDIUM"),
    LOW("LOW");

    public final String value;

    private AuditFindingSeverityEnum(String value) {
        this.value = value;
    }
}
