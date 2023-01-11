package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddPermissionRequestBody {
    @JsonProperty("Action")
    public String action;
    public AddPermissionRequestBody withAction(String action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventSourceToken")
    public String eventSourceToken;
    public AddPermissionRequestBody withEventSourceToken(String eventSourceToken) {
        this.eventSourceToken = eventSourceToken;
        return this;
    }
    @JsonProperty("Principal")
    public String principal;
    public AddPermissionRequestBody withPrincipal(String principal) {
        this.principal = principal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RevisionId")
    public String revisionId;
    public AddPermissionRequestBody withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceAccount")
    public String sourceAccount;
    public AddPermissionRequestBody withSourceAccount(String sourceAccount) {
        this.sourceAccount = sourceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceArn")
    public String sourceArn;
    public AddPermissionRequestBody withSourceArn(String sourceArn) {
        this.sourceArn = sourceArn;
        return this;
    }
    @JsonProperty("StatementId")
    public String statementId;
    public AddPermissionRequestBody withStatementId(String statementId) {
        this.statementId = statementId;
        return this;
    }
}