package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnableSharingWithAwsOrganizationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnValue")
    public Boolean returnValue;
    public EnableSharingWithAwsOrganizationResponse withReturnValue(Boolean returnValue) {
        this.returnValue = returnValue;
        return this;
    }
}