package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TinVerificationComprehensiveCheckQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public TinVerificationComprehensiveCheckQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=threshold")
    public Long threshold;
    public TinVerificationComprehensiveCheckQueryParams withThreshold(Long threshold) {
        this.threshold = threshold;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tin")
    public String tin;
    public TinVerificationComprehensiveCheckQueryParams withTin(String tin) {
        this.tin = tin;
        return this;
    }
}