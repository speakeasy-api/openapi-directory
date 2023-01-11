package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProtocolSyslogSendRequest {
    public ProtocolSyslogSendPathParams pathParams;
    public ProtocolSyslogSendRequest withPathParams(ProtocolSyslogSendPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SyslogMsg request;
    public ProtocolSyslogSendRequest withRequest(openapisdk.models.shared.SyslogMsg request) {
        this.request = request;
        return this;
    }
}