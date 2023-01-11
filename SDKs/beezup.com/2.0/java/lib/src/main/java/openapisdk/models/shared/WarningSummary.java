package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WarningSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("technicalErrorMessage")
    public String technicalErrorMessage;
    public WarningSummary withTechnicalErrorMessage(String technicalErrorMessage) {
        this.technicalErrorMessage = technicalErrorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warningArguments")
    public java.util.Map<String, String> warningArguments;
    public WarningSummary withWarningArguments(java.util.Map<String, String> warningArguments) {
        this.warningArguments = warningArguments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warningCode")
    public String warningCode;
    public WarningSummary withWarningCode(String warningCode) {
        this.warningCode = warningCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warningMessage")
    public String warningMessage;
    public WarningSummary withWarningMessage(String warningMessage) {
        this.warningMessage = warningMessage;
        return this;
    }
}