package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetV3SearchEventsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_from")
    public OffsetDateTime dateFrom;
    public GetV3SearchEventsQueryParams withDateFrom(OffsetDateTime dateFrom) {
        this.dateFrom = dateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_to")
    public OffsetDateTime dateTo;
    public GetV3SearchEventsQueryParams withDateTo(OffsetDateTime dateTo) {
        this.dateTo = dateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=editorial_segment")
    public openapisdk.models.shared.EditorialSegmentContractEnum editorialSegment;
    public GetV3SearchEventsQueryParams withEditorialSegment(openapisdk.models.shared.EditorialSegmentContractEnum editorialSegment) {
        this.editorialSegment = editorialSegment;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=fields")
    public openapisdk.models.shared.EventFieldValuesEnum[] fields;
    public GetV3SearchEventsQueryParams withFields(openapisdk.models.shared.EventFieldValuesEnum[] fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetV3SearchEventsQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Integer pageSize;
    public GetV3SearchEventsQueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=phrase")
    public String phrase;
    public GetV3SearchEventsQueryParams withPhrase(String phrase) {
        this.phrase = phrase;
        return this;
    }
}