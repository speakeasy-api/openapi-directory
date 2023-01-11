package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SignConfirmPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=job")
    public String job;
    public SignConfirmPathParams withJob(String job) {
        this.job = job;
        return this;
    }
}