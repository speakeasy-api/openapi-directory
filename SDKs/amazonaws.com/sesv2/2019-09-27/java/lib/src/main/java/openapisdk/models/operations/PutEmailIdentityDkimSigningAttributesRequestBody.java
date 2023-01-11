package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutEmailIdentityDkimSigningAttributesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SigningAttributes")
    public PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributes signingAttributes;
    public PutEmailIdentityDkimSigningAttributesRequestBody withSigningAttributes(PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributes signingAttributes) {
        this.signingAttributes = signingAttributes;
        return this;
    }
    @JsonProperty("SigningAttributesOrigin")
    public PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributesOriginEnum signingAttributesOrigin;
    public PutEmailIdentityDkimSigningAttributesRequestBody withSigningAttributesOrigin(PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributesOriginEnum signingAttributesOrigin) {
        this.signingAttributesOrigin = signingAttributesOrigin;
        return this;
    }
}