package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CodeScanningSarifsStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analyses_url")
    public String analysesUrl;
    public CodeScanningSarifsStatus withAnalysesUrl(String analysesUrl) {
        this.analysesUrl = analysesUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processing_status")
    public CodeScanningSarifsStatusProcessingStatusEnum processingStatus;
    public CodeScanningSarifsStatus withProcessingStatus(CodeScanningSarifsStatusProcessingStatusEnum processingStatus) {
        this.processingStatus = processingStatus;
        return this;
    }
}