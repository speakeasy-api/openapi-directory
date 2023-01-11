package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutEmailIdentityDkimSigningAttributesResponse
 * <p>If the action is successful, the service sends back an HTTP 200 response.</p> <p>The following data is returned in JSON format by the service.</p>
**/
public class PutEmailIdentityDkimSigningAttributesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DkimStatus")
    public DkimStatusEnum dkimStatus;
    public PutEmailIdentityDkimSigningAttributesResponse withDkimStatus(DkimStatusEnum dkimStatus) {
        this.dkimStatus = dkimStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DkimTokens")
    public String[] dkimTokens;
    public PutEmailIdentityDkimSigningAttributesResponse withDkimTokens(String[] dkimTokens) {
        this.dkimTokens = dkimTokens;
        return this;
    }
}