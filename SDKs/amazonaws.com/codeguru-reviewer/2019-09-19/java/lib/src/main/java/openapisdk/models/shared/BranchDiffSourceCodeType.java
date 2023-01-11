package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BranchDiffSourceCodeType
 *  A type of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType"> <code>SourceCodeType</code> </a> that specifies a code diff between a source and destination branch in an associated repository. 
**/
public class BranchDiffSourceCodeType {
    @JsonProperty("DestinationBranchName")
    public String destinationBranchName;
    public BranchDiffSourceCodeType withDestinationBranchName(String destinationBranchName) {
        this.destinationBranchName = destinationBranchName;
        return this;
    }
    @JsonProperty("SourceBranchName")
    public String sourceBranchName;
    public BranchDiffSourceCodeType withSourceBranchName(String sourceBranchName) {
        this.sourceBranchName = sourceBranchName;
        return this;
    }
}