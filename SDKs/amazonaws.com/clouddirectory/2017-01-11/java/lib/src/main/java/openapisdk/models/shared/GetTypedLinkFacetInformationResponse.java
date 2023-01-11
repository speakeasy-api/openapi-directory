package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTypedLinkFacetInformationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityAttributeOrder")
    public String[] identityAttributeOrder;
    public GetTypedLinkFacetInformationResponse withIdentityAttributeOrder(String[] identityAttributeOrder) {
        this.identityAttributeOrder = identityAttributeOrder;
        return this;
    }
}