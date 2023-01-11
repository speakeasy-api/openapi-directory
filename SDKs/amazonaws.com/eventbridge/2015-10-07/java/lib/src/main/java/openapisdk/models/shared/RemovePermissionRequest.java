package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RemovePermissionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventBusName")
    public String eventBusName;
    public RemovePermissionRequest withEventBusName(String eventBusName) {
        this.eventBusName = eventBusName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemoveAllPermissions")
    public Boolean removeAllPermissions;
    public RemovePermissionRequest withRemoveAllPermissions(Boolean removeAllPermissions) {
        this.removeAllPermissions = removeAllPermissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatementId")
    public String statementId;
    public RemovePermissionRequest withStatementId(String statementId) {
        this.statementId = statementId;
        return this;
    }
}