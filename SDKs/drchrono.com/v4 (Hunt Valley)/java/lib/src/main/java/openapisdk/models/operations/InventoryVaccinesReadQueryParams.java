package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InventoryVaccinesReadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cvx_code")
    public String cvxCode;
    public InventoryVaccinesReadQueryParams withCvxCode(String cvxCode) {
        this.cvxCode = cvxCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public InventoryVaccinesReadQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public InventoryVaccinesReadQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public String status;
    public InventoryVaccinesReadQueryParams withStatus(String status) {
        this.status = status;
        return this;
    }
}