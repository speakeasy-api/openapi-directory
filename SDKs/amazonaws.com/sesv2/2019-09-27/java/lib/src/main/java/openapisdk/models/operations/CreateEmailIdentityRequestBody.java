package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateEmailIdentityRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigurationSetName")
    public String configurationSetName;
    public CreateEmailIdentityRequestBody withConfigurationSetName(String configurationSetName) {
        this.configurationSetName = configurationSetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DkimSigningAttributes")
    public CreateEmailIdentityRequestBodyDkimSigningAttributes dkimSigningAttributes;
    public CreateEmailIdentityRequestBody withDkimSigningAttributes(CreateEmailIdentityRequestBodyDkimSigningAttributes dkimSigningAttributes) {
        this.dkimSigningAttributes = dkimSigningAttributes;
        return this;
    }
    @JsonProperty("EmailIdentity")
    public String emailIdentity;
    public CreateEmailIdentityRequestBody withEmailIdentity(String emailIdentity) {
        this.emailIdentity = emailIdentity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreateEmailIdentityRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
}