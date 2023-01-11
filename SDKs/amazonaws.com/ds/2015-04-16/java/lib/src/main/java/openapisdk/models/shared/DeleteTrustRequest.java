package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteTrustRequest
 * Deletes the local side of an existing trust relationship between the Managed Microsoft AD directory and the external domain.
**/
public class DeleteTrustRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeleteAssociatedConditionalForwarder")
    public Boolean deleteAssociatedConditionalForwarder;
    public DeleteTrustRequest withDeleteAssociatedConditionalForwarder(Boolean deleteAssociatedConditionalForwarder) {
        this.deleteAssociatedConditionalForwarder = deleteAssociatedConditionalForwarder;
        return this;
    }
    @JsonProperty("TrustId")
    public String trustId;
    public DeleteTrustRequest withTrustId(String trustId) {
        this.trustId = trustId;
        return this;
    }
}