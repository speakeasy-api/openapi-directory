package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SignUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=job")
    public String job;
    public SignUpdatePathParams withJob(String job) {
        this.job = job;
        return this;
    }
}