package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CanvasDataAnalyticsSummaryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=canvas_id")
    public String canvasId;
    public CanvasDataAnalyticsSummaryQueryParams withCanvasId(String canvasId) {
        this.canvasId = canvasId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ending_at")
    public String endingAt;
    public CanvasDataAnalyticsSummaryQueryParams withEndingAt(String endingAt) {
        this.endingAt = endingAt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_deleted_step_data")
    public String includeDeletedStepData;
    public CanvasDataAnalyticsSummaryQueryParams withIncludeDeletedStepData(String includeDeletedStepData) {
        this.includeDeletedStepData = includeDeletedStepData;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_step_breakdown")
    public String includeStepBreakdown;
    public CanvasDataAnalyticsSummaryQueryParams withIncludeStepBreakdown(String includeStepBreakdown) {
        this.includeStepBreakdown = includeStepBreakdown;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_variant_breakdown")
    public String includeVariantBreakdown;
    public CanvasDataAnalyticsSummaryQueryParams withIncludeVariantBreakdown(String includeVariantBreakdown) {
        this.includeVariantBreakdown = includeVariantBreakdown;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=length")
    public String length;
    public CanvasDataAnalyticsSummaryQueryParams withLength(String length) {
        this.length = length;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=starting_at")
    public String startingAt;
    public CanvasDataAnalyticsSummaryQueryParams withStartingAt(String startingAt) {
        this.startingAt = startingAt;
        return this;
    }
}