package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListProvisioningArtifactsForServiceActionOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextPageToken")
    public String nextPageToken;
    public ListProvisioningArtifactsForServiceActionOutput withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProvisioningArtifactViews")
    public ProvisioningArtifactView[] provisioningArtifactViews;
    public ListProvisioningArtifactsForServiceActionOutput withProvisioningArtifactViews(ProvisioningArtifactView[] provisioningArtifactViews) {
        this.provisioningArtifactViews = provisioningArtifactViews;
        return this;
    }
}