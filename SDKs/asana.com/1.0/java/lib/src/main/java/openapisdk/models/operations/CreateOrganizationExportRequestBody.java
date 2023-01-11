package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateOrganizationExportRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.OrganizationExportRequest data;
    public CreateOrganizationExportRequestBody withData(openapisdk.models.shared.OrganizationExportRequest data) {
        this.data = data;
        return this;
    }
}