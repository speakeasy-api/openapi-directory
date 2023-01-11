package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReloadTablesMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReloadOption")
    public ReloadOptionValueEnum reloadOption;
    public ReloadTablesMessage withReloadOption(ReloadOptionValueEnum reloadOption) {
        this.reloadOption = reloadOption;
        return this;
    }
    @JsonProperty("ReplicationTaskArn")
    public String replicationTaskArn;
    public ReloadTablesMessage withReplicationTaskArn(String replicationTaskArn) {
        this.replicationTaskArn = replicationTaskArn;
        return this;
    }
    @JsonProperty("TablesToReload")
    public TableToReload[] tablesToReload;
    public ReloadTablesMessage withTablesToReload(TableToReload[] tablesToReload) {
        this.tablesToReload = tablesToReload;
        return this;
    }
}