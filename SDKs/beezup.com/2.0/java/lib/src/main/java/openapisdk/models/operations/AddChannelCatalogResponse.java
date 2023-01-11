package openapisdk.models.operations;



public class AddChannelCatalogResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public AddChannelCatalogResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public AddChannelCatalogResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public AddChannelCatalogResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public AddChannelCatalogResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LinksGetChannelCatalogLink linksGetChannelCatalogLink;
    public AddChannelCatalogResponse withLinksGetChannelCatalogLink(openapisdk.models.shared.LinksGetChannelCatalogLink linksGetChannelCatalogLink) {
        this.linksGetChannelCatalogLink = linksGetChannelCatalogLink;
        return this;
    }
}