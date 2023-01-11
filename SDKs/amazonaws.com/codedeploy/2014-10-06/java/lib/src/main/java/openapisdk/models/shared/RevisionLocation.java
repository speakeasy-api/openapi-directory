package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RevisionLocation
 * Information about the location of an application revision.
**/
public class RevisionLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appSpecContent")
    public AppSpecContent appSpecContent;
    public RevisionLocation withAppSpecContent(AppSpecContent appSpecContent) {
        this.appSpecContent = appSpecContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gitHubLocation")
    public GitHubLocation gitHubLocation;
    public RevisionLocation withGitHubLocation(GitHubLocation gitHubLocation) {
        this.gitHubLocation = gitHubLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionType")
    public RevisionLocationTypeEnum revisionType;
    public RevisionLocation withRevisionType(RevisionLocationTypeEnum revisionType) {
        this.revisionType = revisionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Location")
    public S3Location s3Location;
    public RevisionLocation withS3Location(S3Location s3Location) {
        this.s3Location = s3Location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("string")
    public RawString string;
    public RevisionLocation withString(RawString string) {
        this.string = string;
        return this;
    }
}