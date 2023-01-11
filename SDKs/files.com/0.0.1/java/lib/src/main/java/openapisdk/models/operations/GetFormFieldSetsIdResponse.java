package openapisdk.models.operations;



public class GetFormFieldSetsIdResponse {
    public String contentType;
    public GetFormFieldSetsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FormFieldSetEntity formFieldSetEntity;
    public GetFormFieldSetsIdResponse withFormFieldSetEntity(openapisdk.models.shared.FormFieldSetEntity formFieldSetEntity) {
        this.formFieldSetEntity = formFieldSetEntity;
        return this;
    }
    public Long statusCode;
    public GetFormFieldSetsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}