package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomPluginLocationDescription
 * Information about the location of a custom plugin.
**/
public class CustomPluginLocationDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Location")
    public S3LocationDescription s3Location;
    public CustomPluginLocationDescription withS3Location(S3LocationDescription s3Location) {
        this.s3Location = s3Location;
        return this;
    }
}