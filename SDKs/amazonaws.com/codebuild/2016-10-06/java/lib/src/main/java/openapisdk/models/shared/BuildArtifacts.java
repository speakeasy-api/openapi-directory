package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BuildArtifacts
 * Information about build output artifacts.
**/
public class BuildArtifacts {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artifactIdentifier")
    public String artifactIdentifier;
    public BuildArtifacts withArtifactIdentifier(String artifactIdentifier) {
        this.artifactIdentifier = artifactIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketOwnerAccess")
    public BucketOwnerAccessEnum bucketOwnerAccess;
    public BuildArtifacts withBucketOwnerAccess(BucketOwnerAccessEnum bucketOwnerAccess) {
        this.bucketOwnerAccess = bucketOwnerAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionDisabled")
    public Boolean encryptionDisabled;
    public BuildArtifacts withEncryptionDisabled(Boolean encryptionDisabled) {
        this.encryptionDisabled = encryptionDisabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public BuildArtifacts withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("md5sum")
    public String md5sum;
    public BuildArtifacts withMd5sum(String md5sum) {
        this.md5sum = md5sum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overrideArtifactName")
    public Boolean overrideArtifactName;
    public BuildArtifacts withOverrideArtifactName(Boolean overrideArtifactName) {
        this.overrideArtifactName = overrideArtifactName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha256sum")
    public String sha256sum;
    public BuildArtifacts withSha256sum(String sha256sum) {
        this.sha256sum = sha256sum;
        return this;
    }
}