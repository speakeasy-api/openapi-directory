package openapisdk.models.operations;



public class ImportationGetCustomColumnsResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public ImportationGetCustomColumnsResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public ImportationGetCustomColumnsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ImportationGetCustomColumnsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ImportationCustomColumnList importationCustomColumnList;
    public ImportationGetCustomColumnsResponse withImportationCustomColumnList(openapisdk.models.shared.ImportationCustomColumnList importationCustomColumnList) {
        this.importationCustomColumnList = importationCustomColumnList;
        return this;
    }
}