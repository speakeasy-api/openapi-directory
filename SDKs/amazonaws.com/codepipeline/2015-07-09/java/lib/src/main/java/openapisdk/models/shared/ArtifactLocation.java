package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ArtifactLocation
 * Represents information about the location of an artifact.
**/
public class ArtifactLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Location")
    public S3ArtifactLocation s3Location;
    public ArtifactLocation withS3Location(S3ArtifactLocation s3Location) {
        this.s3Location = s3Location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ArtifactLocationTypeEnum type;
    public ArtifactLocation withType(ArtifactLocationTypeEnum type) {
        this.type = type;
        return this;
    }
}