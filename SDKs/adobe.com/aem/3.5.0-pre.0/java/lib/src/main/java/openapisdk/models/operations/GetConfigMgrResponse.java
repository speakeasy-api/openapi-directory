package openapisdk.models.operations;



public class GetConfigMgrResponse {
    public String contentType;
    public GetConfigMgrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetConfigMgrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getConfigMgr200TextXMLString;
    public GetConfigMgrResponse withGetConfigMgr200TextXmlString(String getConfigMgr200TextXMLString) {
        this.getConfigMgr200TextXMLString = getConfigMgr200TextXMLString;
        return this;
    }
}