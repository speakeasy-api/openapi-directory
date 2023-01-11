package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateRobotApplicationVersionRequestBody {
    @JsonProperty("application")
    public String application;
    public CreateRobotApplicationVersionRequestBody withApplication(String application) {
        this.application = application;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentRevisionId")
    public String currentRevisionId;
    public CreateRobotApplicationVersionRequestBody withCurrentRevisionId(String currentRevisionId) {
        this.currentRevisionId = currentRevisionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageDigest")
    public String imageDigest;
    public CreateRobotApplicationVersionRequestBody withImageDigest(String imageDigest) {
        this.imageDigest = imageDigest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Etags")
    public String[] s3Etags;
    public CreateRobotApplicationVersionRequestBody withS3Etags(String[] s3Etags) {
        this.s3Etags = s3Etags;
        return this;
    }
}