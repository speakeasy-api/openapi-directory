package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceMetadata
 * Provides information about the SSO instance.
**/
public class InstanceMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityStoreId")
    public String identityStoreId;
    public InstanceMetadata withIdentityStoreId(String identityStoreId) {
        this.identityStoreId = identityStoreId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceArn")
    public String instanceArn;
    public InstanceMetadata withInstanceArn(String instanceArn) {
        this.instanceArn = instanceArn;
        return this;
    }
}