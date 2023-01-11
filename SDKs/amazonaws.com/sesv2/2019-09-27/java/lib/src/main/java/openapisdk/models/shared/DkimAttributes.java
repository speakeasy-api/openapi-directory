package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DkimAttributes
 * <p>An object that contains information about the DKIM authentication status for an email identity.</p> <p>Amazon SES determines the authentication status by searching for specific records in the DNS configuration for the domain. If you used <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a> to set up DKIM authentication, Amazon SES tries to find three unique CNAME records in the DNS configuration for your domain. If you provided a public key to perform DKIM authentication, Amazon SES tries to find a TXT record that uses the selector that you specified. The value of the TXT record must be a public key that's paired with the private key that you specified in the process of creating the identity</p>
**/
public class DkimAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SigningAttributesOrigin")
    public DkimSigningAttributesOriginEnum signingAttributesOrigin;
    public DkimAttributes withSigningAttributesOrigin(DkimSigningAttributesOriginEnum signingAttributesOrigin) {
        this.signingAttributesOrigin = signingAttributesOrigin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SigningEnabled")
    public Boolean signingEnabled;
    public DkimAttributes withSigningEnabled(Boolean signingEnabled) {
        this.signingEnabled = signingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public DkimStatusEnum status;
    public DkimAttributes withStatus(DkimStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tokens")
    public String[] tokens;
    public DkimAttributes withTokens(String[] tokens) {
        this.tokens = tokens;
        return this;
    }
}