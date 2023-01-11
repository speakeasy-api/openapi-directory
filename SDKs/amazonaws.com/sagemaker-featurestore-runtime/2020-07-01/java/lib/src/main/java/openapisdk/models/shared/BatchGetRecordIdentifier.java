package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchGetRecordIdentifier
 * The identifier that identifies the batch of Records you are retrieving in a batch.
**/
public class BatchGetRecordIdentifier {
    @JsonProperty("FeatureGroupName")
    public String featureGroupName;
    public BatchGetRecordIdentifier withFeatureGroupName(String featureGroupName) {
        this.featureGroupName = featureGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeatureNames")
    public String[] featureNames;
    public BatchGetRecordIdentifier withFeatureNames(String[] featureNames) {
        this.featureNames = featureNames;
        return this;
    }
    @JsonProperty("RecordIdentifiersValueAsString")
    public String[] recordIdentifiersValueAsString;
    public BatchGetRecordIdentifier withRecordIdentifiersValueAsString(String[] recordIdentifiersValueAsString) {
        this.recordIdentifiersValueAsString = recordIdentifiersValueAsString;
        return this;
    }
}