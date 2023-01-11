package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateLocationS3Response
 * CreateLocationS3Response
**/
public class CreateLocationS3Response {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocationArn")
    public String locationArn;
    public CreateLocationS3Response withLocationArn(String locationArn) {
        this.locationArn = locationArn;
        return this;
    }
}