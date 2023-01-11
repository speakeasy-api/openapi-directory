package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * MavenReference
 * The information required to specify a Maven reference. You can use Maven references to specify dependency JAR files.
**/
public class MavenReference {
    @JsonProperty("ArtifactId")
    public String artifactId;
    public MavenReference withArtifactId(String artifactId) {
        this.artifactId = artifactId;
        return this;
    }
    @JsonProperty("GroupId")
    public String groupId;
    public MavenReference withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonProperty("Version")
    public String version;
    public MavenReference withVersion(String version) {
        this.version = version;
        return this;
    }
}