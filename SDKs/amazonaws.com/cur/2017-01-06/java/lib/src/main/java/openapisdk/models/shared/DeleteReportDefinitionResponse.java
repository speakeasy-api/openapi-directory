package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteReportDefinitionResponse
 * If the action is successful, the service sends back an HTTP 200 response.
**/
public class DeleteReportDefinitionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResponseMessage")
    public String responseMessage;
    public DeleteReportDefinitionResponse withResponseMessage(String responseMessage) {
        this.responseMessage = responseMessage;
        return this;
    }
}