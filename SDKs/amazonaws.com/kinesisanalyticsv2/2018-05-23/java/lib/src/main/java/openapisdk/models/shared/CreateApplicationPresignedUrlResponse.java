package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateApplicationPresignedUrlResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuthorizedUrl")
    public String authorizedUrl;
    public CreateApplicationPresignedUrlResponse withAuthorizedUrl(String authorizedUrl) {
        this.authorizedUrl = authorizedUrl;
        return this;
    }
}