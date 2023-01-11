package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteGitHubAccountTokenInput
 * Represents the input of a <code>DeleteGitHubAccount</code> operation.
**/
public class DeleteGitHubAccountTokenInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokenName")
    public String tokenName;
    public DeleteGitHubAccountTokenInput withTokenName(String tokenName) {
        this.tokenName = tokenName;
        return this;
    }
}