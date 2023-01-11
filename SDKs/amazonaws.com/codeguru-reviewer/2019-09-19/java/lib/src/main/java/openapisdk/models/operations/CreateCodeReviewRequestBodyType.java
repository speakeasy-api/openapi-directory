package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateCodeReviewRequestBodyType
 * <p> The type of a code review. There are two code review types: </p> <ul> <li> <p> <code>PullRequest</code> - A code review that is automatically triggered by a pull request on an associated repository. </p> </li> <li> <p> <code>RepositoryAnalysis</code> - A code review that analyzes all code under a specified branch in an associated repository. The associated repository is specified using its ARN in <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview"> <code>CreateCodeReview</code> </a>. </p> </li> </ul>
**/
public class CreateCodeReviewRequestBodyType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnalysisTypes")
    public openapisdk.models.shared.AnalysisTypeEnum[] analysisTypes;
    public CreateCodeReviewRequestBodyType withAnalysisTypes(openapisdk.models.shared.AnalysisTypeEnum[] analysisTypes) {
        this.analysisTypes = analysisTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RepositoryAnalysis")
    public openapisdk.models.shared.RepositoryAnalysis repositoryAnalysis;
    public CreateCodeReviewRequestBodyType withRepositoryAnalysis(openapisdk.models.shared.RepositoryAnalysis repositoryAnalysis) {
        this.repositoryAnalysis = repositoryAnalysis;
        return this;
    }
}