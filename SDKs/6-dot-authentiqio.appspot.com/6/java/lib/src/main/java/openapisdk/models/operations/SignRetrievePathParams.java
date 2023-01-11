package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SignRetrievePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=job")
    public String job;
    public SignRetrievePathParams withJob(String job) {
        this.job = job;
        return this;
    }
}