package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImporterExporterCodeVerificationApiPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=iec")
    public String iec;
    public ImporterExporterCodeVerificationApiPathParams withIec(String iec) {
        this.iec = iec;
        return this;
    }
}