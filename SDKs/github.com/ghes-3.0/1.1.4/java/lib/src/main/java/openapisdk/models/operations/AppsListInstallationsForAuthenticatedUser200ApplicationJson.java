package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AppsListInstallationsForAuthenticatedUser200ApplicationJson {
    @JsonProperty("installations")
    public openapisdk.models.shared.Installation[] installations;
    public AppsListInstallationsForAuthenticatedUser200ApplicationJson withInstallations(openapisdk.models.shared.Installation[] installations) {
        this.installations = installations;
        return this;
    }
    @JsonProperty("total_count")
    public Long totalCount;
    public AppsListInstallationsForAuthenticatedUser200ApplicationJson withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}