package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportApiQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=basepath")
    public String basepath;
    public ImportApiQueryParams withBasepath(String basepath) {
        this.basepath = basepath;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=failOnWarnings")
    public Boolean failOnWarnings;
    public ImportApiQueryParams withFailOnWarnings(Boolean failOnWarnings) {
        this.failOnWarnings = failOnWarnings;
        return this;
    }
}