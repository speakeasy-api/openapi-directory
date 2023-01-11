package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateClusterSettingsRequest {
    @JsonProperty("cluster")
    public String cluster;
    public UpdateClusterSettingsRequest withCluster(String cluster) {
        this.cluster = cluster;
        return this;
    }
    @JsonProperty("settings")
    public ClusterSetting[] settings;
    public UpdateClusterSettingsRequest withSettings(ClusterSetting[] settings) {
        this.settings = settings;
        return this;
    }
}