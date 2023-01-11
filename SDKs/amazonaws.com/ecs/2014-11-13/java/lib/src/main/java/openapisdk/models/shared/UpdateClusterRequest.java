package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateClusterRequest {
    @JsonProperty("cluster")
    public String cluster;
    public UpdateClusterRequest withCluster(String cluster) {
        this.cluster = cluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configuration")
    public ClusterConfiguration configuration;
    public UpdateClusterRequest withConfiguration(ClusterConfiguration configuration) {
        this.configuration = configuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public ClusterSetting[] settings;
    public UpdateClusterRequest withSettings(ClusterSetting[] settings) {
        this.settings = settings;
        return this;
    }
}