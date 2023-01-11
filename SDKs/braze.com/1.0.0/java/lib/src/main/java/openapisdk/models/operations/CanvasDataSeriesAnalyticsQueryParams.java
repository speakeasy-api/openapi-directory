package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CanvasDataSeriesAnalyticsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=canvas_id")
    public String canvasId;
    public CanvasDataSeriesAnalyticsQueryParams withCanvasId(String canvasId) {
        this.canvasId = canvasId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ending_at")
    public String endingAt;
    public CanvasDataSeriesAnalyticsQueryParams withEndingAt(String endingAt) {
        this.endingAt = endingAt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_deleted_step_data")
    public String includeDeletedStepData;
    public CanvasDataSeriesAnalyticsQueryParams withIncludeDeletedStepData(String includeDeletedStepData) {
        this.includeDeletedStepData = includeDeletedStepData;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_step_breakdown")
    public String includeStepBreakdown;
    public CanvasDataSeriesAnalyticsQueryParams withIncludeStepBreakdown(String includeStepBreakdown) {
        this.includeStepBreakdown = includeStepBreakdown;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_variant_breakdown")
    public String includeVariantBreakdown;
    public CanvasDataSeriesAnalyticsQueryParams withIncludeVariantBreakdown(String includeVariantBreakdown) {
        this.includeVariantBreakdown = includeVariantBreakdown;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=length")
    public String length;
    public CanvasDataSeriesAnalyticsQueryParams withLength(String length) {
        this.length = length;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=starting_at")
    public String startingAt;
    public CanvasDataSeriesAnalyticsQueryParams withStartingAt(String startingAt) {
        this.startingAt = startingAt;
        return this;
    }
}