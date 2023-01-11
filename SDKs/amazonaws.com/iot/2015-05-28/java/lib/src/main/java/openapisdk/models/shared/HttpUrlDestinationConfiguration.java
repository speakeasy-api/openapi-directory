package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * HttpUrlDestinationConfiguration
 * HTTP URL destination configuration used by the topic rule's HTTP action.
**/
public class HttpUrlDestinationConfiguration {
    @JsonProperty("confirmationUrl")
    public String confirmationUrl;
    public HttpUrlDestinationConfiguration withConfirmationUrl(String confirmationUrl) {
        this.confirmationUrl = confirmationUrl;
        return this;
    }
}