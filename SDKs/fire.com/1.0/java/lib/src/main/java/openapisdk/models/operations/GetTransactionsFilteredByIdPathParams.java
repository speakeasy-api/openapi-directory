package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTransactionsFilteredByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ican")
    public Long ican;
    public GetTransactionsFilteredByIdPathParams withIcan(Long ican) {
        this.ican = ican;
        return this;
    }
}