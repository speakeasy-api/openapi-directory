package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PinpointDestination
 * An object that defines a Amazon Pinpoint destination for email events. You can use Amazon Pinpoint events to create attributes in Amazon Pinpoint projects. You can use these attributes to create segments for your campaigns.
**/
public class PinpointDestination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationArn")
    public String applicationArn;
    public PinpointDestination withApplicationArn(String applicationArn) {
        this.applicationArn = applicationArn;
        return this;
    }
}