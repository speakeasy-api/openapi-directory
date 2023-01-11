package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReimportApiQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=basepath")
    public String basepath;
    public ReimportApiQueryParams withBasepath(String basepath) {
        this.basepath = basepath;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=failOnWarnings")
    public Boolean failOnWarnings;
    public ReimportApiQueryParams withFailOnWarnings(Boolean failOnWarnings) {
        this.failOnWarnings = failOnWarnings;
        return this;
    }
}