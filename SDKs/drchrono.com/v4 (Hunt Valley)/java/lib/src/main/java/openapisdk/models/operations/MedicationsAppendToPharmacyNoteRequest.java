package openapisdk.models.operations;



public class MedicationsAppendToPharmacyNoteRequest {
    public MedicationsAppendToPharmacyNotePathParams pathParams;
    public MedicationsAppendToPharmacyNoteRequest withPathParams(MedicationsAppendToPharmacyNotePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MedicationsAppendToPharmacyNoteQueryParams queryParams;
    public MedicationsAppendToPharmacyNoteRequest withQueryParams(MedicationsAppendToPharmacyNoteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MedicationsAppendToPharmacyNoteSecurity security;
    public MedicationsAppendToPharmacyNoteRequest withSecurity(MedicationsAppendToPharmacyNoteSecurity security) {
        this.security = security;
        return this;
    }
}