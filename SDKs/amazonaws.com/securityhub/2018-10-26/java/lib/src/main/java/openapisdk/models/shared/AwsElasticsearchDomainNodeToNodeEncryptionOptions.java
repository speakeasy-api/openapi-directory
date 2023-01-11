package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsElasticsearchDomainNodeToNodeEncryptionOptions
 * Details about the configuration for node-to-node encryption.
**/
public class AwsElasticsearchDomainNodeToNodeEncryptionOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public AwsElasticsearchDomainNodeToNodeEncryptionOptions withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}