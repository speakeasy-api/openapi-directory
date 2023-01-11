package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateMicrosoftAdRequest
 * Creates an Managed Microsoft AD directory.
**/
public class CreateMicrosoftAdRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateMicrosoftAdRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Edition")
    public DirectoryEditionEnum edition;
    public CreateMicrosoftAdRequest withEdition(DirectoryEditionEnum edition) {
        this.edition = edition;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateMicrosoftAdRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("Password")
    public String password;
    public CreateMicrosoftAdRequest withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShortName")
    public String shortName;
    public CreateMicrosoftAdRequest withShortName(String shortName) {
        this.shortName = shortName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateMicrosoftAdRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("VpcSettings")
    public DirectoryVpcSettings vpcSettings;
    public CreateMicrosoftAdRequest withVpcSettings(DirectoryVpcSettings vpcSettings) {
        this.vpcSettings = vpcSettings;
        return this;
    }
}