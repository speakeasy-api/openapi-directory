package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateWebhookRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("branchName")
    public String branchName;
    public UpdateWebhookRequestBody withBranchName(String branchName) {
        this.branchName = branchName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateWebhookRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
}