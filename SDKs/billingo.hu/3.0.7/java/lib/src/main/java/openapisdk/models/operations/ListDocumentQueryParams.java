package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class ListDocumentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=block_id")
    public Long blockId;
    public ListDocumentQueryParams withBlockId(Long blockId) {
        this.blockId = blockId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_date")
    public LocalDate endDate;
    public ListDocumentQueryParams withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_number")
    public Long endNumber;
    public ListDocumentQueryParams withEndNumber(Long endNumber) {
        this.endNumber = endNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_year")
    public Long endYear;
    public ListDocumentQueryParams withEndYear(Long endYear) {
        this.endYear = endYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ListDocumentQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=partner_id")
    public Long partnerId;
    public ListDocumentQueryParams withPartnerId(Long partnerId) {
        this.partnerId = partnerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payment_method")
    public openapisdk.models.shared.PaymentMethodEnum paymentMethod;
    public ListDocumentQueryParams withPaymentMethod(openapisdk.models.shared.PaymentMethodEnum paymentMethod) {
        this.paymentMethod = paymentMethod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payment_status")
    public openapisdk.models.shared.PaymentStatusEnum paymentStatus;
    public ListDocumentQueryParams withPaymentStatus(openapisdk.models.shared.PaymentStatusEnum paymentStatus) {
        this.paymentStatus = paymentStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ListDocumentQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_date")
    public LocalDate startDate;
    public ListDocumentQueryParams withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_number")
    public Long startNumber;
    public ListDocumentQueryParams withStartNumber(Long startNumber) {
        this.startNumber = startNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_year")
    public Long startYear;
    public ListDocumentQueryParams withStartYear(Long startYear) {
        this.startYear = startYear;
        return this;
    }
}