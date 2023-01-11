package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateLocationEfsRequest
 * CreateLocationEfsRequest
**/
public class CreateLocationEfsRequest {
    @JsonProperty("Ec2Config")
    public Ec2Config ec2Config;
    public CreateLocationEfsRequest withEc2Config(Ec2Config ec2Config) {
        this.ec2Config = ec2Config;
        return this;
    }
    @JsonProperty("EfsFilesystemArn")
    public String efsFilesystemArn;
    public CreateLocationEfsRequest withEfsFilesystemArn(String efsFilesystemArn) {
        this.efsFilesystemArn = efsFilesystemArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Subdirectory")
    public String subdirectory;
    public CreateLocationEfsRequest withSubdirectory(String subdirectory) {
        this.subdirectory = subdirectory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public TagListEntry[] tags;
    public CreateLocationEfsRequest withTags(TagListEntry[] tags) {
        this.tags = tags;
        return this;
    }
}