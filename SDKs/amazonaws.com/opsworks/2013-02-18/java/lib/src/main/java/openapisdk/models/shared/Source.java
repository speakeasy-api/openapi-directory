package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Source
 * Contains the information required to retrieve an app or cookbook from a repository. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a> or <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Custom Recipes and Cookbooks</a>.
**/
public class Source {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Password")
    public String password;
    public Source withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Revision")
    public String revision;
    public Source withRevision(String revision) {
        this.revision = revision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SshKey")
    public String sshKey;
    public Source withSshKey(String sshKey) {
        this.sshKey = sshKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public SourceTypeEnum type;
    public Source withType(SourceTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Url")
    public String url;
    public Source withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Username")
    public String username;
    public Source withUsername(String username) {
        this.username = username;
        return this;
    }
}