package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateAnalyzerResponse
 * The response to the request to create an analyzer.
**/
public class CreateAnalyzerResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public CreateAnalyzerResponse withArn(String arn) {
        this.arn = arn;
        return this;
    }
}