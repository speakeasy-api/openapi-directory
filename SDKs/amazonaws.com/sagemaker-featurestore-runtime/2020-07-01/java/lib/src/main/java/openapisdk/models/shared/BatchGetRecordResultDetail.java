package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchGetRecordResultDetail
 * The output of Records that have been retrieved in a batch.
**/
public class BatchGetRecordResultDetail {
    @JsonProperty("FeatureGroupName")
    public String featureGroupName;
    public BatchGetRecordResultDetail withFeatureGroupName(String featureGroupName) {
        this.featureGroupName = featureGroupName;
        return this;
    }
    @JsonProperty("Record")
    public FeatureValue[] record;
    public BatchGetRecordResultDetail withRecord(FeatureValue[] record) {
        this.record = record;
        return this;
    }
    @JsonProperty("RecordIdentifierValueAsString")
    public String recordIdentifierValueAsString;
    public BatchGetRecordResultDetail withRecordIdentifierValueAsString(String recordIdentifierValueAsString) {
        this.recordIdentifierValueAsString = recordIdentifierValueAsString;
        return this;
    }
}