package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFactNumbersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=number")
    public Long number;
    public GetFactNumbersQueryParams withNumber(Long number) {
        this.number = number;
        return this;
    }
}