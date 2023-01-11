package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteLicenseResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeletionDate")
    public String deletionDate;
    public DeleteLicenseResponse withDeletionDate(String deletionDate) {
        this.deletionDate = deletionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public LicenseDeletionStatusEnum status;
    public DeleteLicenseResponse withStatus(LicenseDeletionStatusEnum status) {
        this.status = status;
        return this;
    }
}