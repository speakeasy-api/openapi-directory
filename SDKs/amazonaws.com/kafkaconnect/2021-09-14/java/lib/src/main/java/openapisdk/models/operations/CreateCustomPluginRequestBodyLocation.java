package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateCustomPluginRequestBodyLocation
 * Information about the location of a custom plugin.
**/
public class CreateCustomPluginRequestBodyLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Location")
    public openapisdk.models.shared.S3Location s3Location;
    public CreateCustomPluginRequestBodyLocation withS3Location(openapisdk.models.shared.S3Location s3Location) {
        this.s3Location = s3Location;
        return this;
    }
}