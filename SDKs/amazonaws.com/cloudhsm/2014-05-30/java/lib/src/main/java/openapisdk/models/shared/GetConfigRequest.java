package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetConfigRequest {
    @JsonProperty("ClientArn")
    public String clientArn;
    public GetConfigRequest withClientArn(String clientArn) {
        this.clientArn = clientArn;
        return this;
    }
    @JsonProperty("ClientVersion")
    public ClientVersionEnum clientVersion;
    public GetConfigRequest withClientVersion(ClientVersionEnum clientVersion) {
        this.clientVersion = clientVersion;
        return this;
    }
    @JsonProperty("HapgList")
    public String[] hapgList;
    public GetConfigRequest withHapgList(String[] hapgList) {
        this.hapgList = hapgList;
        return this;
    }
}