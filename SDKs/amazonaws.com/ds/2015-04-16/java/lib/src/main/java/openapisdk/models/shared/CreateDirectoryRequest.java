package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateDirectoryRequest
 * Contains the inputs for the <a>CreateDirectory</a> operation. 
**/
public class CreateDirectoryRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateDirectoryRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateDirectoryRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("Password")
    public String password;
    public CreateDirectoryRequest withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShortName")
    public String shortName;
    public CreateDirectoryRequest withShortName(String shortName) {
        this.shortName = shortName;
        return this;
    }
    @JsonProperty("Size")
    public DirectorySizeEnum size;
    public CreateDirectoryRequest withSize(DirectorySizeEnum size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateDirectoryRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcSettings")
    public DirectoryVpcSettings vpcSettings;
    public CreateDirectoryRequest withVpcSettings(DirectoryVpcSettings vpcSettings) {
        this.vpcSettings = vpcSettings;
        return this;
    }
}