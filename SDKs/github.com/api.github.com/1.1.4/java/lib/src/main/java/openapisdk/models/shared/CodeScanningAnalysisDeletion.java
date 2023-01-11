package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CodeScanningAnalysisDeletion
 * Successful deletion of a code scanning analysis
**/
public class CodeScanningAnalysisDeletion {
    @JsonProperty("confirm_delete_url")
    public String confirmDeleteUrl;
    public CodeScanningAnalysisDeletion withConfirmDeleteUrl(String confirmDeleteUrl) {
        this.confirmDeleteUrl = confirmDeleteUrl;
        return this;
    }
    @JsonProperty("next_analysis_url")
    public String nextAnalysisUrl;
    public CodeScanningAnalysisDeletion withNextAnalysisUrl(String nextAnalysisUrl) {
        this.nextAnalysisUrl = nextAnalysisUrl;
        return this;
    }
}