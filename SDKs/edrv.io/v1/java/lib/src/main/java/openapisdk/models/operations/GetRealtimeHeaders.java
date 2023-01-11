package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRealtimeHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=sec-websocket-protocol")
    public String secWebsocketProtocol;
    public GetRealtimeHeaders withSecWebsocketProtocol(String secWebsocketProtocol) {
        this.secWebsocketProtocol = secWebsocketProtocol;
        return this;
    }
}