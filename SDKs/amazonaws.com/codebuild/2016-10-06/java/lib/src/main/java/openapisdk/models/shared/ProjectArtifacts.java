package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProjectArtifacts
 * Information about the build output artifacts for the build project.
**/
public class ProjectArtifacts {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artifactIdentifier")
    public String artifactIdentifier;
    public ProjectArtifacts withArtifactIdentifier(String artifactIdentifier) {
        this.artifactIdentifier = artifactIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketOwnerAccess")
    public BucketOwnerAccessEnum bucketOwnerAccess;
    public ProjectArtifacts withBucketOwnerAccess(BucketOwnerAccessEnum bucketOwnerAccess) {
        this.bucketOwnerAccess = bucketOwnerAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionDisabled")
    public Boolean encryptionDisabled;
    public ProjectArtifacts withEncryptionDisabled(Boolean encryptionDisabled) {
        this.encryptionDisabled = encryptionDisabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public ProjectArtifacts withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ProjectArtifacts withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespaceType")
    public ArtifactNamespaceEnum namespaceType;
    public ProjectArtifacts withNamespaceType(ArtifactNamespaceEnum namespaceType) {
        this.namespaceType = namespaceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overrideArtifactName")
    public Boolean overrideArtifactName;
    public ProjectArtifacts withOverrideArtifactName(Boolean overrideArtifactName) {
        this.overrideArtifactName = overrideArtifactName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packaging")
    public ArtifactPackagingEnum packaging;
    public ProjectArtifacts withPackaging(ArtifactPackagingEnum packaging) {
        this.packaging = packaging;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public ProjectArtifacts withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonProperty("type")
    public ArtifactsTypeEnum type;
    public ProjectArtifacts withType(ArtifactsTypeEnum type) {
        this.type = type;
        return this;
    }
}