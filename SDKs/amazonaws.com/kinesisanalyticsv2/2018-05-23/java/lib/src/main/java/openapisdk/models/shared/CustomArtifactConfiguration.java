package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomArtifactConfiguration
 * Specifies dependency JARs, as well as JAR files that contain user-defined functions (UDF).
**/
public class CustomArtifactConfiguration {
    @JsonProperty("ArtifactType")
    public ArtifactTypeEnum artifactType;
    public CustomArtifactConfiguration withArtifactType(ArtifactTypeEnum artifactType) {
        this.artifactType = artifactType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MavenReference")
    public MavenReference mavenReference;
    public CustomArtifactConfiguration withMavenReference(MavenReference mavenReference) {
        this.mavenReference = mavenReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3ContentLocation")
    public S3ContentLocation s3ContentLocation;
    public CustomArtifactConfiguration withS3ContentLocation(S3ContentLocation s3ContentLocation) {
        this.s3ContentLocation = s3ContentLocation;
        return this;
    }
}