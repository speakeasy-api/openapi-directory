/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

/**
 * DataQualityRuleRecommendationRunDescription - Describes the result of a data quality rule recommendation run.
 */
public class DataQualityRuleRecommendationRunDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataSource")
    public DataSource dataSource;

    public DataQualityRuleRecommendationRunDescription withDataSource(DataSource dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RunId")
    public String runId;

    public DataQualityRuleRecommendationRunDescription withRunId(String runId) {
        this.runId = runId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("StartedOn")
    public OffsetDateTime startedOn;

    public DataQualityRuleRecommendationRunDescription withStartedOn(OffsetDateTime startedOn) {
        this.startedOn = startedOn;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public TaskStatusTypeEnum status;

    public DataQualityRuleRecommendationRunDescription withStatus(TaskStatusTypeEnum status) {
        this.status = status;
        return this;
    }
    
    public DataQualityRuleRecommendationRunDescription(){}
}
