package openapisdk.models.operations;



public class ListMedicalVocabulariesResponse {
    public Object badRequestException;
    public ListMedicalVocabulariesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListMedicalVocabulariesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListMedicalVocabulariesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public ListMedicalVocabulariesResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListMedicalVocabulariesResponse listMedicalVocabulariesResponse;
    public ListMedicalVocabulariesResponse withListMedicalVocabulariesResponse(openapisdk.models.shared.ListMedicalVocabulariesResponse listMedicalVocabulariesResponse) {
        this.listMedicalVocabulariesResponse = listMedicalVocabulariesResponse;
        return this;
    }
    public Long statusCode;
    public ListMedicalVocabulariesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}