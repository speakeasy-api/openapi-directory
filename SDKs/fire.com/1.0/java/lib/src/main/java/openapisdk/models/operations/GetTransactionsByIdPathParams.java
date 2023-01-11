package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTransactionsByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ican")
    public Long ican;
    public GetTransactionsByIdPathParams withIcan(Long ican) {
        this.ican = ican;
        return this;
    }
}