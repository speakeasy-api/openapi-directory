package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SignRetrieveHeadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=job")
    public String job;
    public SignRetrieveHeadPathParams withJob(String job) {
        this.job = job;
        return this;
    }
}