package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EvaluationCycle
 * This complex type describes the start and end dates of the of the time period over which the associated benchmark is computed. All timestamps are based on Mountain Standard Time (MST). The timestamp is formatted as an ISO 8601 string, which is based on the 24-hour Coordinated Universal Time (UTC) clock.
**/
public class EvaluationCycle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public String endDate;
    public EvaluationCycle withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evaluationDate")
    public String evaluationDate;
    public EvaluationCycle withEvaluationDate(String evaluationDate) {
        this.evaluationDate = evaluationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evaluationType")
    public String evaluationType;
    public EvaluationCycle withEvaluationType(String evaluationType) {
        this.evaluationType = evaluationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public String startDate;
    public EvaluationCycle withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
}