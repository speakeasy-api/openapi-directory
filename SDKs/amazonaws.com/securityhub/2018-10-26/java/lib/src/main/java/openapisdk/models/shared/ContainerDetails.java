package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContainerDetails
 * Container details related to a finding.
**/
public class ContainerDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageId")
    public String imageId;
    public ContainerDetails withImageId(String imageId) {
        this.imageId = imageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageName")
    public String imageName;
    public ContainerDetails withImageName(String imageName) {
        this.imageName = imageName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LaunchedAt")
    public String launchedAt;
    public ContainerDetails withLaunchedAt(String launchedAt) {
        this.launchedAt = launchedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ContainerDetails withName(String name) {
        this.name = name;
        return this;
    }
}