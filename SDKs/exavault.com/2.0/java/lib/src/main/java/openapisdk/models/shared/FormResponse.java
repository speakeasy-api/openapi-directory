package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FormResponse
 * Response object for forms.
**/
public class FormResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Form data;
    public FormResponse withData(Form data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("included")
    public Share[] included;
    public FormResponse withIncluded(Share[] included) {
        this.included = included;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseStatus")
    public Long responseStatus;
    public FormResponse withResponseStatus(Long responseStatus) {
        this.responseStatus = responseStatus;
        return this;
    }
}