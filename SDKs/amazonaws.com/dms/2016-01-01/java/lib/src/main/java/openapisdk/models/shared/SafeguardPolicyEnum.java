package openapisdk.models.shared;


public enum SafeguardPolicyEnum {
    RELY_ON_SQL_SERVER_REPLICATION_AGENT("rely-on-sql-server-replication-agent"),
    EXCLUSIVE_AUTOMATIC_TRUNCATION("exclusive-automatic-truncation"),
    SHARED_AUTOMATIC_TRUNCATION("shared-automatic-truncation");

    public final String value;

    private SafeguardPolicyEnum(String value) {
        this.value = value;
    }
}
