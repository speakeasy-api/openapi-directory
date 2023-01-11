package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ProjectSourceVersion
 *  A source identifier and its corresponding version. 
**/
public class ProjectSourceVersion {
    @JsonProperty("sourceIdentifier")
    public String sourceIdentifier;
    public ProjectSourceVersion withSourceIdentifier(String sourceIdentifier) {
        this.sourceIdentifier = sourceIdentifier;
        return this;
    }
    @JsonProperty("sourceVersion")
    public String sourceVersion;
    public ProjectSourceVersion withSourceVersion(String sourceVersion) {
        this.sourceVersion = sourceVersion;
        return this;
    }
}