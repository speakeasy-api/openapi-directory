package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CommitDiffSourceCodeType
 *  A type of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType"> <code>SourceCodeType</code> </a> that specifies the commit diff for a pull request on an associated repository. The <code>SourceCommit</code> and <code>DestinationCommit</code> fields are required to do a pull request code review. 
**/
public class CommitDiffSourceCodeType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationCommit")
    public String destinationCommit;
    public CommitDiffSourceCodeType withDestinationCommit(String destinationCommit) {
        this.destinationCommit = destinationCommit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MergeBaseCommit")
    public String mergeBaseCommit;
    public CommitDiffSourceCodeType withMergeBaseCommit(String mergeBaseCommit) {
        this.mergeBaseCommit = mergeBaseCommit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceCommit")
    public String sourceCommit;
    public CommitDiffSourceCodeType withSourceCommit(String sourceCommit) {
        this.sourceCommit = sourceCommit;
        return this;
    }
}