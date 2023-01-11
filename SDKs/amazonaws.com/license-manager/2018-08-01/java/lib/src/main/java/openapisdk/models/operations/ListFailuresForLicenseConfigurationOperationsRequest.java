package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFailuresForLicenseConfigurationOperationsRequest {
    public ListFailuresForLicenseConfigurationOperationsHeaders headers;
    public ListFailuresForLicenseConfigurationOperationsRequest withHeaders(ListFailuresForLicenseConfigurationOperationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListFailuresForLicenseConfigurationOperationsRequest request;
    public ListFailuresForLicenseConfigurationOperationsRequest withRequest(openapisdk.models.shared.ListFailuresForLicenseConfigurationOperationsRequest request) {
        this.request = request;
        return this;
    }
}