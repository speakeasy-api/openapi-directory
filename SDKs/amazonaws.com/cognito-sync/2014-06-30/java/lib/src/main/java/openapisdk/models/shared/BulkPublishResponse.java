package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BulkPublishResponse
 * The output for the BulkPublish operation.
**/
public class BulkPublishResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityPoolId")
    public String identityPoolId;
    public BulkPublishResponse withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
}