package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAssessmentFrameworksResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frameworkMetadataList")
    public AssessmentFrameworkMetadata[] frameworkMetadataList;
    public ListAssessmentFrameworksResponse withFrameworkMetadataList(AssessmentFrameworkMetadata[] frameworkMetadataList) {
        this.frameworkMetadataList = frameworkMetadataList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListAssessmentFrameworksResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}