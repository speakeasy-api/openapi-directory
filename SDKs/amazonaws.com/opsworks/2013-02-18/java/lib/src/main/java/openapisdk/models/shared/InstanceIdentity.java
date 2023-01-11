package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceIdentity
 * Contains a description of an Amazon EC2 instance from the Amazon EC2 metadata service. For more information, see <a href="https://docs.aws.amazon.com/sdkfornet/latest/apidocs/Index.html">Instance Metadata and User Data</a>.
**/
public class InstanceIdentity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Document")
    public String document;
    public InstanceIdentity withDocument(String document) {
        this.document = document;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Signature")
    public String signature;
    public InstanceIdentity withSignature(String signature) {
        this.signature = signature;
        return this;
    }
}