package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InstallToRemoteAccessSessionRequest {
    public InstallToRemoteAccessSessionHeaders headers;
    public InstallToRemoteAccessSessionRequest withHeaders(InstallToRemoteAccessSessionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InstallToRemoteAccessSessionRequest request;
    public InstallToRemoteAccessSessionRequest withRequest(openapisdk.models.shared.InstallToRemoteAccessSessionRequest request) {
        this.request = request;
        return this;
    }
}