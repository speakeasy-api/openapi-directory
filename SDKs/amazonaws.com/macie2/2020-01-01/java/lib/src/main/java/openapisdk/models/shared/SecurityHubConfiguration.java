package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SecurityHubConfiguration
 * Specifies configuration settings that determine which findings are published to Security Hub automatically. For information about how Macie publishes findings to Security Hub, see <a href="https://docs.aws.amazon.com/macie/latest/user/securityhub-integration.html">Amazon Macie integration with Security Hub</a> in the <i>Amazon Macie User Guide</i>.
**/
public class SecurityHubConfiguration {
    @JsonProperty("publishClassificationFindings")
    public Boolean publishClassificationFindings;
    public SecurityHubConfiguration withPublishClassificationFindings(Boolean publishClassificationFindings) {
        this.publishClassificationFindings = publishClassificationFindings;
        return this;
    }
    @JsonProperty("publishPolicyFindings")
    public Boolean publishPolicyFindings;
    public SecurityHubConfiguration withPublishPolicyFindings(Boolean publishPolicyFindings) {
        this.publishPolicyFindings = publishPolicyFindings;
        return this;
    }
}