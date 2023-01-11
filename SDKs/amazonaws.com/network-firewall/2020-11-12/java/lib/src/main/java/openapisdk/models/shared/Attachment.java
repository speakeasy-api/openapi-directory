package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Attachment
 * The configuration and status for a single subnet that you've specified for use by the AWS Network Firewall firewall. This is part of the <a>FirewallStatus</a>.
**/
public class Attachment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointId")
    public String endpointId;
    public Attachment withEndpointId(String endpointId) {
        this.endpointId = endpointId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public AttachmentStatusEnum status;
    public Attachment withStatus(AttachmentStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetId")
    public String subnetId;
    public Attachment withSubnetId(String subnetId) {
        this.subnetId = subnetId;
        return this;
    }
}