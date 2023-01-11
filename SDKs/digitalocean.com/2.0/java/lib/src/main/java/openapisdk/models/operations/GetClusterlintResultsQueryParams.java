package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetClusterlintResultsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=run_id")
    public String runId;
    public GetClusterlintResultsQueryParams withRunId(String runId) {
        this.runId = runId;
        return this;
    }
}