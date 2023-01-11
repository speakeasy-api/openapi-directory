package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RepositoryHeadSourceCodeType
 *  A <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType"> <code>SourceCodeType</code> </a> that specifies the tip of a branch in an associated repository. 
**/
public class RepositoryHeadSourceCodeType {
    @JsonProperty("BranchName")
    public String branchName;
    public RepositoryHeadSourceCodeType withBranchName(String branchName) {
        this.branchName = branchName;
        return this;
    }
}