package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpUrlDestinationSummary
 * Information about an HTTP URL destination.
**/
public class HttpUrlDestinationSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confirmationUrl")
    public String confirmationUrl;
    public HttpUrlDestinationSummary withConfirmationUrl(String confirmationUrl) {
        this.confirmationUrl = confirmationUrl;
        return this;
    }
}