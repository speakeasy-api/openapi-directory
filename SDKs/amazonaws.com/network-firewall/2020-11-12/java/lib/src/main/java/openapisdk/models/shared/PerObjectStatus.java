package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PerObjectStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SyncStatus")
    public PerObjectSyncStatusEnum syncStatus;
    public PerObjectStatus withSyncStatus(PerObjectSyncStatusEnum syncStatus) {
        this.syncStatus = syncStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdateToken")
    public String updateToken;
    public PerObjectStatus withUpdateToken(String updateToken) {
        this.updateToken = updateToken;
        return this;
    }
}