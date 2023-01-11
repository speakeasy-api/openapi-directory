package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetDataRetrievalPolicyOutput
 * Contains the Amazon S3 Glacier response to the <code>GetDataRetrievalPolicy</code> request.
**/
public class GetDataRetrievalPolicyOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Policy")
    public DataRetrievalPolicy policy;
    public GetDataRetrievalPolicyOutput withPolicy(DataRetrievalPolicy policy) {
        this.policy = policy;
        return this;
    }
}