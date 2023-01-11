package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportChannelCatalogProductInfoListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public openapisdk.models.shared.ExportFormatInQueryGeneralParameterEnum format;
    public ExportChannelCatalogProductInfoListQueryParams withFormat(openapisdk.models.shared.ExportFormatInQueryGeneralParameterEnum format) {
        this.format = format;
        return this;
    }
}