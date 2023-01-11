package openapisdk.models.operations;



public class GetV1Request {
    public String serverURL;
    public GetV1Request withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public GetV1QueryParams queryParams;
    public GetV1Request withQueryParams(GetV1QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}