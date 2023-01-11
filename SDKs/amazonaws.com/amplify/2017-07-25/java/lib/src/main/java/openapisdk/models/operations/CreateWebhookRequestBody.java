package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateWebhookRequestBody {
    @JsonProperty("branchName")
    public String branchName;
    public CreateWebhookRequestBody withBranchName(String branchName) {
        this.branchName = branchName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateWebhookRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
}