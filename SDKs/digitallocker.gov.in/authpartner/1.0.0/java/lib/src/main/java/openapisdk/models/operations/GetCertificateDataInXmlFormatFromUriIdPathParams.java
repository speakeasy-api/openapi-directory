package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCertificateDataInXmlFormatFromUriIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=uri")
    public String uri;
    public GetCertificateDataInXmlFormatFromUriIdPathParams withUri(String uri) {
        this.uri = uri;
        return this;
    }
}