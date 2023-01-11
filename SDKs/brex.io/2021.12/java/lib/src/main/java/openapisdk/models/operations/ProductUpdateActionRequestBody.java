package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductUpdateActionRequestBody {
    @SpeakeasyMetadata("form:name=credits")
    public Double credits;
    public ProductUpdateActionRequestBody withCredits(Double credits) {
        this.credits = credits;
        return this;
    }
}