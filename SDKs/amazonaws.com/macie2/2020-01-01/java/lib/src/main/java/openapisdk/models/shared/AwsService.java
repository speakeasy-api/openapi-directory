package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsService
 * Provides information about an Amazon Web Service that performed an action on an affected resource.
**/
public class AwsService {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invokedBy")
    public String invokedBy;
    public AwsService withInvokedBy(String invokedBy) {
        this.invokedBy = invokedBy;
        return this;
    }
}