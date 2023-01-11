package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CopyImageResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationImageName")
    public String destinationImageName;
    public CopyImageResponse withDestinationImageName(String destinationImageName) {
        this.destinationImageName = destinationImageName;
        return this;
    }
}