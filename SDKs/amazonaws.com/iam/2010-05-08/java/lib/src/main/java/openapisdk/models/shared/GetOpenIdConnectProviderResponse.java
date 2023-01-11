package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * GetOpenIdConnectProviderResponse
 * Contains the response to a successful <a>GetOpenIDConnectProvider</a> request. 
**/
public class GetOpenIdConnectProviderResponse {
    public String[] clientIDList;
    public GetOpenIdConnectProviderResponse withClientIdList(String[] clientIDList) {
        this.clientIDList = clientIDList;
        return this;
    }
    public OffsetDateTime createDate;
    public GetOpenIdConnectProviderResponse withCreateDate(OffsetDateTime createDate) {
        this.createDate = createDate;
        return this;
    }
    public Tag[] tags;
    public GetOpenIdConnectProviderResponse withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    public String[] thumbprintList;
    public GetOpenIdConnectProviderResponse withThumbprintList(String[] thumbprintList) {
        this.thumbprintList = thumbprintList;
        return this;
    }
    public String url;
    public GetOpenIdConnectProviderResponse withUrl(String url) {
        this.url = url;
        return this;
    }
}