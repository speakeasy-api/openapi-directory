package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectDirectoryRequest
 * Contains the inputs for the <a>ConnectDirectory</a> operation.
**/
public class ConnectDirectoryRequest {
    @JsonProperty("ConnectSettings")
    public DirectoryConnectSettings connectSettings;
    public ConnectDirectoryRequest withConnectSettings(DirectoryConnectSettings connectSettings) {
        this.connectSettings = connectSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public ConnectDirectoryRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public ConnectDirectoryRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("Password")
    public String password;
    public ConnectDirectoryRequest withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShortName")
    public String shortName;
    public ConnectDirectoryRequest withShortName(String shortName) {
        this.shortName = shortName;
        return this;
    }
    @JsonProperty("Size")
    public DirectorySizeEnum size;
    public ConnectDirectoryRequest withSize(DirectorySizeEnum size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public ConnectDirectoryRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}