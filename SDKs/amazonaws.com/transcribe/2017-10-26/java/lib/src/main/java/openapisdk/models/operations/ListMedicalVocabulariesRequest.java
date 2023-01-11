package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMedicalVocabulariesRequest {
    public ListMedicalVocabulariesQueryParams queryParams;
    public ListMedicalVocabulariesRequest withQueryParams(ListMedicalVocabulariesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListMedicalVocabulariesHeaders headers;
    public ListMedicalVocabulariesRequest withHeaders(ListMedicalVocabulariesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListMedicalVocabulariesRequest request;
    public ListMedicalVocabulariesRequest withRequest(openapisdk.models.shared.ListMedicalVocabulariesRequest request) {
        this.request = request;
        return this;
    }
}