package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccessRules
 * <p>Describes the anonymous access permissions for an Amazon Lightsail bucket and its objects.</p> <p>For more information about bucket access permissions, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-understanding-bucket-permissions">Understanding bucket permissions in Amazon Lightsail</a> in the </p> <p> <i>Amazon Lightsail Developer Guide</i>.</p>
**/
public class AccessRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowPublicOverrides")
    public Boolean allowPublicOverrides;
    public AccessRules withAllowPublicOverrides(Boolean allowPublicOverrides) {
        this.allowPublicOverrides = allowPublicOverrides;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("getObject")
    public AccessTypeEnum getObject;
    public AccessRules withGetObject(AccessTypeEnum getObject) {
        this.getObject = getObject;
        return this;
    }
}