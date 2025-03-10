/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ProactiveInsight - Details about a proactive insight. This object is returned by &lt;code&gt;ListInsights&lt;/code&gt;.
 */
public class ProactiveInsight {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;

    public ProactiveInsight withDescription(String description) {
        this.description = description;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;

    public ProactiveInsight withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     *  A time ranged that specifies when the observed behavior in an insight started and ended. 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InsightTimeRange")
    public InsightTimeRange insightTimeRange;

    public ProactiveInsight withInsightTimeRange(InsightTimeRange insightTimeRange) {
        this.insightTimeRange = insightTimeRange;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;

    public ProactiveInsight withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     *  The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur. 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PredictionTimeRange")
    public PredictionTimeRange predictionTimeRange;

    public ProactiveInsight withPredictionTimeRange(PredictionTimeRange predictionTimeRange) {
        this.predictionTimeRange = predictionTimeRange;
        return this;
    }
    
    /**
     *  A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag &lt;i&gt;key&lt;/i&gt;. You can specify up to 500 Amazon Web Services CloudFormation stacks. 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceCollection")
    public ResourceCollection resourceCollection;

    public ProactiveInsight withResourceCollection(ResourceCollection resourceCollection) {
        this.resourceCollection = resourceCollection;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Severity")
    public InsightSeverityEnum severity;

    public ProactiveInsight withSeverity(InsightSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SsmOpsItemId")
    public String ssmOpsItemId;

    public ProactiveInsight withSsmOpsItemId(String ssmOpsItemId) {
        this.ssmOpsItemId = ssmOpsItemId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public InsightStatusEnum status;

    public ProactiveInsight withStatus(InsightStatusEnum status) {
        this.status = status;
        return this;
    }
    
    public ProactiveInsight(){}
}
