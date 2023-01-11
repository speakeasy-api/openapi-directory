package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateLicenseSpecificationsForResourceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AddLicenseSpecifications")
    public LicenseSpecification[] addLicenseSpecifications;
    public UpdateLicenseSpecificationsForResourceRequest withAddLicenseSpecifications(LicenseSpecification[] addLicenseSpecifications) {
        this.addLicenseSpecifications = addLicenseSpecifications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemoveLicenseSpecifications")
    public LicenseSpecification[] removeLicenseSpecifications;
    public UpdateLicenseSpecificationsForResourceRequest withRemoveLicenseSpecifications(LicenseSpecification[] removeLicenseSpecifications) {
        this.removeLicenseSpecifications = removeLicenseSpecifications;
        return this;
    }
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public UpdateLicenseSpecificationsForResourceRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}