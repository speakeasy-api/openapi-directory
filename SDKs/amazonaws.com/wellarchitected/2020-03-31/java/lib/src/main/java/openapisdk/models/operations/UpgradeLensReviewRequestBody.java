package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpgradeLensReviewRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientRequestToken")
    public String clientRequestToken;
    public UpgradeLensReviewRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonProperty("MilestoneName")
    public String milestoneName;
    public UpgradeLensReviewRequestBody withMilestoneName(String milestoneName) {
        this.milestoneName = milestoneName;
        return this;
    }
}