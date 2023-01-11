package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RepositoryAnalysis
 *  A code review type that analyzes all code under a specified branch in an associated repository. The associated repository is specified using its ARN when you call <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview"> <code>CreateCodeReview</code> </a>. 
**/
public class RepositoryAnalysis {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RepositoryHead")
    public RepositoryHeadSourceCodeType repositoryHead;
    public RepositoryAnalysis withRepositoryHead(RepositoryHeadSourceCodeType repositoryHead) {
        this.repositoryHead = repositoryHead;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceCodeType")
    public SourceCodeType sourceCodeType;
    public RepositoryAnalysis withSourceCodeType(SourceCodeType sourceCodeType) {
        this.sourceCodeType = sourceCodeType;
        return this;
    }
}