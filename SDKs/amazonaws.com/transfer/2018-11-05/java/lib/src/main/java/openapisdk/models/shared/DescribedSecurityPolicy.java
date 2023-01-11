package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribedSecurityPolicy
 * Describes the properties of a security policy that was specified. For more information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security policies</a>.
**/
public class DescribedSecurityPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Fips")
    public Boolean fips;
    public DescribedSecurityPolicy withFips(Boolean fips) {
        this.fips = fips;
        return this;
    }
    @JsonProperty("SecurityPolicyName")
    public String securityPolicyName;
    public DescribedSecurityPolicy withSecurityPolicyName(String securityPolicyName) {
        this.securityPolicyName = securityPolicyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SshCiphers")
    public String[] sshCiphers;
    public DescribedSecurityPolicy withSshCiphers(String[] sshCiphers) {
        this.sshCiphers = sshCiphers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SshKexs")
    public String[] sshKexs;
    public DescribedSecurityPolicy withSshKexs(String[] sshKexs) {
        this.sshKexs = sshKexs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SshMacs")
    public String[] sshMacs;
    public DescribedSecurityPolicy withSshMacs(String[] sshMacs) {
        this.sshMacs = sshMacs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TlsCiphers")
    public String[] tlsCiphers;
    public DescribedSecurityPolicy withTlsCiphers(String[] tlsCiphers) {
        this.tlsCiphers = tlsCiphers;
        return this;
    }
}