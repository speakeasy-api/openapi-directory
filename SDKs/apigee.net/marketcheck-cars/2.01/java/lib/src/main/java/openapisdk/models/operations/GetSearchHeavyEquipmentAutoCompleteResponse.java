package openapisdk.models.operations;



public class GetSearchHeavyEquipmentAutoCompleteResponse {
    public String contentType;
    public GetSearchHeavyEquipmentAutoCompleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetSearchHeavyEquipmentAutoCompleteResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.SearchAutoCompleteResponse searchAutoCompleteResponse;
    public GetSearchHeavyEquipmentAutoCompleteResponse withSearchAutoCompleteResponse(openapisdk.models.shared.SearchAutoCompleteResponse searchAutoCompleteResponse) {
        this.searchAutoCompleteResponse = searchAutoCompleteResponse;
        return this;
    }
    public Long statusCode;
    public GetSearchHeavyEquipmentAutoCompleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}