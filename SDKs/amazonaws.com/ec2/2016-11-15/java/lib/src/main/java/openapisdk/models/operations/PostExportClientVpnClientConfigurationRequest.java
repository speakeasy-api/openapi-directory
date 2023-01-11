package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostExportClientVpnClientConfigurationRequest {
    public PostExportClientVpnClientConfigurationQueryParams queryParams;
    public PostExportClientVpnClientConfigurationRequest withQueryParams(PostExportClientVpnClientConfigurationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostExportClientVpnClientConfigurationHeaders headers;
    public PostExportClientVpnClientConfigurationRequest withHeaders(PostExportClientVpnClientConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostExportClientVpnClientConfigurationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}