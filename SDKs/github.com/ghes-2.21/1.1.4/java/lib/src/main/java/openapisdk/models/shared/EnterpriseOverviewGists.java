package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseOverviewGists {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private_gists")
    public Long privateGists;
    public EnterpriseOverviewGists withPrivateGists(Long privateGists) {
        this.privateGists = privateGists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public_gists")
    public Long publicGists;
    public EnterpriseOverviewGists withPublicGists(Long publicGists) {
        this.publicGists = publicGists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_gists")
    public Long totalGists;
    public EnterpriseOverviewGists withTotalGists(Long totalGists) {
        this.totalGists = totalGists;
        return this;
    }
}