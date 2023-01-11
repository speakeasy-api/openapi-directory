package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConfigIssue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config_file")
    public String configFile;
    public ConfigIssue withConfigFile(String configFile) {
        this.configFile = configFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issues")
    public String[] issues;
    public ConfigIssue withIssues(String[] issues) {
        this.issues = issues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_name")
    public String serviceName;
    public ConfigIssue withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suggestions")
    public String[] suggestions;
    public ConfigIssue withSuggestions(String[] suggestions) {
        this.suggestions = suggestions;
        return this;
    }
}