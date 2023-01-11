package openapisdk.models.operations;



public class GetFormFieldSetsResponse {
    public String contentType;
    public GetFormFieldSetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FormFieldSetEntity[] formFieldSetEntities;
    public GetFormFieldSetsResponse withFormFieldSetEntities(openapisdk.models.shared.FormFieldSetEntity[] formFieldSetEntities) {
        this.formFieldSetEntities = formFieldSetEntities;
        return this;
    }
    public Long statusCode;
    public GetFormFieldSetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}