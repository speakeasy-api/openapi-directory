package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FindMatchesMetrics
 * The evaluation metrics for the find matches algorithm. The quality of your machine learning transform is measured by getting your transform to predict some matches and comparing the results to known matches from the same dataset. The quality metrics are based on a subset of your data, so they are not precise.
**/
public class FindMatchesMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AreaUnderPRCurve")
    public Double areaUnderPRCurve;
    public FindMatchesMetrics withAreaUnderPrCurve(Double areaUnderPRCurve) {
        this.areaUnderPRCurve = areaUnderPRCurve;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ColumnImportances")
    public ColumnImportance[] columnImportances;
    public FindMatchesMetrics withColumnImportances(ColumnImportance[] columnImportances) {
        this.columnImportances = columnImportances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfusionMatrix")
    public ConfusionMatrix confusionMatrix;
    public FindMatchesMetrics withConfusionMatrix(ConfusionMatrix confusionMatrix) {
        this.confusionMatrix = confusionMatrix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("F1")
    public Double f1;
    public FindMatchesMetrics withF1(Double f1) {
        this.f1 = f1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Precision")
    public Double precision;
    public FindMatchesMetrics withPrecision(Double precision) {
        this.precision = precision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Recall")
    public Double recall;
    public FindMatchesMetrics withRecall(Double recall) {
        this.recall = recall;
        return this;
    }
}