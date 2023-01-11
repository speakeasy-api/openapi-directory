package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateEmailIdentityResponse
 * <p>If the email identity is a domain, this object contains information about the DKIM verification status for the domain.</p> <p>If the email identity is an email address, this object is empty. </p>
**/
public class CreateEmailIdentityResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DkimAttributes")
    public DkimAttributes dkimAttributes;
    public CreateEmailIdentityResponse withDkimAttributes(DkimAttributes dkimAttributes) {
        this.dkimAttributes = dkimAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityType")
    public IdentityTypeEnum identityType;
    public CreateEmailIdentityResponse withIdentityType(IdentityTypeEnum identityType) {
        this.identityType = identityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VerifiedForSendingStatus")
    public Boolean verifiedForSendingStatus;
    public CreateEmailIdentityResponse withVerifiedForSendingStatus(Boolean verifiedForSendingStatus) {
        this.verifiedForSendingStatus = verifiedForSendingStatus;
        return this;
    }
}