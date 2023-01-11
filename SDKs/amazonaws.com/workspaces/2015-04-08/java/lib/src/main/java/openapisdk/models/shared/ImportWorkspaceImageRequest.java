package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportWorkspaceImageRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Applications")
    public ApplicationEnum[] applications;
    public ImportWorkspaceImageRequest withApplications(ApplicationEnum[] applications) {
        this.applications = applications;
        return this;
    }
    @JsonProperty("Ec2ImageId")
    public String ec2ImageId;
    public ImportWorkspaceImageRequest withEc2ImageId(String ec2ImageId) {
        this.ec2ImageId = ec2ImageId;
        return this;
    }
    @JsonProperty("ImageDescription")
    public String imageDescription;
    public ImportWorkspaceImageRequest withImageDescription(String imageDescription) {
        this.imageDescription = imageDescription;
        return this;
    }
    @JsonProperty("ImageName")
    public String imageName;
    public ImportWorkspaceImageRequest withImageName(String imageName) {
        this.imageName = imageName;
        return this;
    }
    @JsonProperty("IngestionProcess")
    public WorkspaceImageIngestionProcessEnum ingestionProcess;
    public ImportWorkspaceImageRequest withIngestionProcess(WorkspaceImageIngestionProcessEnum ingestionProcess) {
        this.ingestionProcess = ingestionProcess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public ImportWorkspaceImageRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}