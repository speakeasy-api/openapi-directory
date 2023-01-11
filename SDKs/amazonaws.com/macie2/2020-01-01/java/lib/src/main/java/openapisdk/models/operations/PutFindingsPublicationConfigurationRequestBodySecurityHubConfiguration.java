package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration
 * Specifies configuration settings that determine which findings are published to Security Hub automatically. For information about how Macie publishes findings to Security Hub, see <a href="https://docs.aws.amazon.com/macie/latest/user/securityhub-integration.html">Amazon Macie integration with Security Hub</a> in the <i>Amazon Macie User Guide</i>.
**/
public class PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publishClassificationFindings")
    public Boolean publishClassificationFindings;
    public PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration withPublishClassificationFindings(Boolean publishClassificationFindings) {
        this.publishClassificationFindings = publishClassificationFindings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publishPolicyFindings")
    public Boolean publishPolicyFindings;
    public PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration withPublishPolicyFindings(Boolean publishPolicyFindings) {
        this.publishPolicyFindings = publishPolicyFindings;
        return this;
    }
}