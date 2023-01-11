package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class S3AccessPointConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessPointPolicy")
    public String accessPointPolicy;
    public S3AccessPointConfiguration withAccessPointPolicy(String accessPointPolicy) {
        this.accessPointPolicy = accessPointPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkOrigin")
    public NetworkOriginConfiguration networkOrigin;
    public S3AccessPointConfiguration withNetworkOrigin(NetworkOriginConfiguration networkOrigin) {
        this.networkOrigin = networkOrigin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicAccessBlock")
    public S3PublicAccessBlockConfiguration publicAccessBlock;
    public S3AccessPointConfiguration withPublicAccessBlock(S3PublicAccessBlockConfiguration publicAccessBlock) {
        this.publicAccessBlock = publicAccessBlock;
        return this;
    }
}