package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TransactionsReadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=appointment")
    public Long appointment;
    public TransactionsReadQueryParams withAppointment(Long appointment) {
        this.appointment = appointment;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public TransactionsReadQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=line_item")
    public Long lineItem;
    public TransactionsReadQueryParams withLineItem(Long lineItem) {
        this.lineItem = lineItem;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=posted_date")
    public String postedDate;
    public TransactionsReadQueryParams withPostedDate(String postedDate) {
        this.postedDate = postedDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public TransactionsReadQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}