package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CodeDestination
 * The repository to be created in AWS CodeStar. Valid values are AWS CodeCommit or GitHub. After AWS CodeStar provisions the new repository, the source code files provided with the project request are placed in the repository.
**/
public class CodeDestination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("codeCommit")
    public CodeCommitCodeDestination codeCommit;
    public CodeDestination withCodeCommit(CodeCommitCodeDestination codeCommit) {
        this.codeCommit = codeCommit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gitHub")
    public GitHubCodeDestination gitHub;
    public CodeDestination withGitHub(GitHubCodeDestination gitHub) {
        this.gitHub = gitHub;
        return this;
    }
}