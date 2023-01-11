package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubmitFeedbackPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=anomalyInstanceId")
    public String anomalyInstanceId;
    public SubmitFeedbackPathParams withAnomalyInstanceId(String anomalyInstanceId) {
        this.anomalyInstanceId = anomalyInstanceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profilingGroupName")
    public String profilingGroupName;
    public SubmitFeedbackPathParams withProfilingGroupName(String profilingGroupName) {
        this.profilingGroupName = profilingGroupName;
        return this;
    }
}