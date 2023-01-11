package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetTimePeriodsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_on")
    public LocalDate endOn;
    public GetTimePeriodsQueryParams withEndOn(LocalDate endOn) {
        this.endOn = endOn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetTimePeriodsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public GetTimePeriodsQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=opt_fields")
    public String[] optFields;
    public GetTimePeriodsQueryParams withOptFields(String[] optFields) {
        this.optFields = optFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=opt_pretty")
    public Boolean optPretty;
    public GetTimePeriodsQueryParams withOptPretty(Boolean optPretty) {
        this.optPretty = optPretty;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_on")
    public LocalDate startOn;
    public GetTimePeriodsQueryParams withStartOn(LocalDate startOn) {
        this.startOn = startOn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=workspace")
    public String workspace;
    public GetTimePeriodsQueryParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}