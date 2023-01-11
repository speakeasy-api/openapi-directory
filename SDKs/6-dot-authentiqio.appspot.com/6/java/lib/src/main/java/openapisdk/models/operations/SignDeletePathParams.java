package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SignDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=job")
    public String job;
    public SignDeletePathParams withJob(String job) {
        this.job = job;
        return this;
    }
}