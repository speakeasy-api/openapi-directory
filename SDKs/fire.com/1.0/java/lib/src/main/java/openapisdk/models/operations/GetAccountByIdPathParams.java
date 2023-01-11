package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ican")
    public Long ican;
    public GetAccountByIdPathParams withIcan(Long ican) {
        this.ican = ican;
        return this;
    }
}