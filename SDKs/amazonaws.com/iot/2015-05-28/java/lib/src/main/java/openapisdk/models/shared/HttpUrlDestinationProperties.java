package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpUrlDestinationProperties
 * HTTP URL destination properties.
**/
public class HttpUrlDestinationProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confirmationUrl")
    public String confirmationUrl;
    public HttpUrlDestinationProperties withConfirmationUrl(String confirmationUrl) {
        this.confirmationUrl = confirmationUrl;
        return this;
    }
}