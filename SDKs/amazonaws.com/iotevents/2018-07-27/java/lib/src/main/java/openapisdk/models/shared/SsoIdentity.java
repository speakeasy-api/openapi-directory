package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SsoIdentity
 * Contains information about your identity source in AWS Single Sign-On. For more information, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">AWS Single Sign-On User Guide</a>.
**/
public class SsoIdentity {
    @JsonProperty("identityStoreId")
    public String identityStoreId;
    public SsoIdentity withIdentityStoreId(String identityStoreId) {
        this.identityStoreId = identityStoreId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public SsoIdentity withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}