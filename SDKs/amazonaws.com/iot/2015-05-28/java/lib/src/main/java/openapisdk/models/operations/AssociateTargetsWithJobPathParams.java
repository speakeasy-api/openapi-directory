package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateTargetsWithJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public AssociateTargetsWithJobPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}