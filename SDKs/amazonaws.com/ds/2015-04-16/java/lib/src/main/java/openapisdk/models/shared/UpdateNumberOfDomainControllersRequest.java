package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNumberOfDomainControllersRequest {
    @JsonProperty("DesiredNumber")
    public Long desiredNumber;
    public UpdateNumberOfDomainControllersRequest withDesiredNumber(Long desiredNumber) {
        this.desiredNumber = desiredNumber;
        return this;
    }
    @JsonProperty("DirectoryId")
    public String directoryId;
    public UpdateNumberOfDomainControllersRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
}