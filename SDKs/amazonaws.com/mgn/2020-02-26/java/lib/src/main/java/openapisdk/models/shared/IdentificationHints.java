package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentificationHints
 * Identification hints.
**/
public class IdentificationHints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsInstanceID")
    public String awsInstanceID;
    public IdentificationHints withAwsInstanceId(String awsInstanceID) {
        this.awsInstanceID = awsInstanceID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fqdn")
    public String fqdn;
    public IdentificationHints withFqdn(String fqdn) {
        this.fqdn = fqdn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostname")
    public String hostname;
    public IdentificationHints withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmWareUuid")
    public String vmWareUuid;
    public IdentificationHints withVmWareUuid(String vmWareUuid) {
        this.vmWareUuid = vmWareUuid;
        return this;
    }
}