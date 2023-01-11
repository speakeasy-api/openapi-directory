package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteGitHubAccountTokenOutput
 * Represents the output of a <code>DeleteGitHubAccountToken</code> operation.
**/
public class DeleteGitHubAccountTokenOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokenName")
    public String tokenName;
    public DeleteGitHubAccountTokenOutput withTokenName(String tokenName) {
        this.tokenName = tokenName;
        return this;
    }
}