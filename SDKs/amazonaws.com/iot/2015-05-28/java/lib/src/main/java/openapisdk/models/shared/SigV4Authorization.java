package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SigV4Authorization
 * For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 signing process</a>.
**/
public class SigV4Authorization {
    @JsonProperty("roleArn")
    public String roleArn;
    public SigV4Authorization withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonProperty("serviceName")
    public String serviceName;
    public SigV4Authorization withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
    @JsonProperty("signingRegion")
    public String signingRegion;
    public SigV4Authorization withSigningRegion(String signingRegion) {
        this.signingRegion = signingRegion;
        return this;
    }
}