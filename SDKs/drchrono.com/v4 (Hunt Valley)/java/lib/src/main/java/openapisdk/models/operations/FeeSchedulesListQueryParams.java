package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FeeSchedulesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=code")
    public String code;
    public FeeSchedulesListQueryParams withCode(String code) {
        this.code = code;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=code_type")
    public String codeType;
    public FeeSchedulesListQueryParams withCodeType(String codeType) {
        this.codeType = codeType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public FeeSchedulesListQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public FeeSchedulesListQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public FeeSchedulesListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payer_id")
    public String payerId;
    public FeeSchedulesListQueryParams withPayerId(String payerId) {
        this.payerId = payerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public FeeSchedulesListQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}