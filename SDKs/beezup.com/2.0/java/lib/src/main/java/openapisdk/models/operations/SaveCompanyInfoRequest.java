package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SaveCompanyInfoRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CompanyInfo request;
    public SaveCompanyInfoRequest withRequest(openapisdk.models.shared.CompanyInfo request) {
        this.request = request;
        return this;
    }
}