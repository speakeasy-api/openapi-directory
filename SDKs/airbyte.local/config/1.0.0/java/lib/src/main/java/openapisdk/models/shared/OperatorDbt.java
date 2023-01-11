package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OperatorDbt {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dbtArguments")
    public String dbtArguments;
    public OperatorDbt withDbtArguments(String dbtArguments) {
        this.dbtArguments = dbtArguments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dockerImage")
    public String dockerImage;
    public OperatorDbt withDockerImage(String dockerImage) {
        this.dockerImage = dockerImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gitRepoBranch")
    public String gitRepoBranch;
    public OperatorDbt withGitRepoBranch(String gitRepoBranch) {
        this.gitRepoBranch = gitRepoBranch;
        return this;
    }
    @JsonProperty("gitRepoUrl")
    public String gitRepoUrl;
    public OperatorDbt withGitRepoUrl(String gitRepoUrl) {
        this.gitRepoUrl = gitRepoUrl;
        return this;
    }
}