package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Artifact
 *  Describes an artifact. 
**/
public class Artifact {
    @JsonProperty("artifactFileName")
    public String artifactFileName;
    public Artifact withArtifactFileName(String artifactFileName) {
        this.artifactFileName = artifactFileName;
        return this;
    }
    @JsonProperty("artifactId")
    public String artifactId;
    public Artifact withArtifactId(String artifactId) {
        this.artifactId = artifactId;
        return this;
    }
}