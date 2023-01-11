package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=job_gid")
    public String jobGid;
    public GetJobPathParams withJobGid(String jobGid) {
        this.jobGid = jobGid;
        return this;
    }
}