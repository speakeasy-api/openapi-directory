package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FormRecognitionResult
 * The result of extracting form field values
**/
public class FormRecognitionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BestMatchFormSettingName")
    public String bestMatchFormSettingName;
    public FormRecognitionResult withBestMatchFormSettingName(String bestMatchFormSettingName) {
        this.bestMatchFormSettingName = bestMatchFormSettingName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Diagnostics")
    public String[] diagnostics;
    public FormRecognitionResult withDiagnostics(String[] diagnostics) {
        this.diagnostics = diagnostics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FieldValueExtractionResult")
    public FieldResult[] fieldValueExtractionResult;
    public FormRecognitionResult withFieldValueExtractionResult(FieldResult[] fieldValueExtractionResult) {
        this.fieldValueExtractionResult = fieldValueExtractionResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Successful")
    public Boolean successful;
    public FormRecognitionResult withSuccessful(Boolean successful) {
        this.successful = successful;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TableValueExtractionResults")
    public TableResult[] tableValueExtractionResults;
    public FormRecognitionResult withTableValueExtractionResults(TableResult[] tableValueExtractionResults) {
        this.tableValueExtractionResults = tableValueExtractionResults;
        return this;
    }
}