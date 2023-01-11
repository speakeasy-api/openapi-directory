package openapisdk.models.shared;


public enum StartReplicationTaskTypeValueEnum {
    START_REPLICATION("start-replication"),
    RESUME_PROCESSING("resume-processing"),
    RELOAD_TARGET("reload-target");

    public final String value;

    private StartReplicationTaskTypeValueEnum(String value) {
        this.value = value;
    }
}
