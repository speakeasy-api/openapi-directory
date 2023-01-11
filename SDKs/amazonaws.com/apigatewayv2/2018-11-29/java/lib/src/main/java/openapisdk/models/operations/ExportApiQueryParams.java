package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportApiQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exportVersion")
    public String exportVersion;
    public ExportApiQueryParams withExportVersion(String exportVersion) {
        this.exportVersion = exportVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeExtensions")
    public Boolean includeExtensions;
    public ExportApiQueryParams withIncludeExtensions(Boolean includeExtensions) {
        this.includeExtensions = includeExtensions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputType")
    public String outputType;
    public ExportApiQueryParams withOutputType(String outputType) {
        this.outputType = outputType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=stageName")
    public String stageName;
    public ExportApiQueryParams withStageName(String stageName) {
        this.stageName = stageName;
        return this;
    }
}