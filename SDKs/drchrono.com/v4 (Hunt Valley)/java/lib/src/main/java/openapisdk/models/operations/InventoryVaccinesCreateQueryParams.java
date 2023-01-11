package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InventoryVaccinesCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cvx_code")
    public String cvxCode;
    public InventoryVaccinesCreateQueryParams withCvxCode(String cvxCode) {
        this.cvxCode = cvxCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public InventoryVaccinesCreateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public InventoryVaccinesCreateQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public String status;
    public InventoryVaccinesCreateQueryParams withStatus(String status) {
        this.status = status;
        return this;
    }
}