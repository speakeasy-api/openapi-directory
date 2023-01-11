package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateOrganizationExport201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.OrganizationExportResponse data;
    public CreateOrganizationExport201ApplicationJson withData(openapisdk.models.shared.OrganizationExportResponse data) {
        this.data = data;
        return this;
    }
}