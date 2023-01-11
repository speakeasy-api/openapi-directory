package openapisdk.models.shared;



/**
 * UpdateJobOutput
 * Output structure for the UpateJob operation.
**/
public class UpdateJobOutput {
    public Artifact[] artifactList;
    public UpdateJobOutput withArtifactList(Artifact[] artifactList) {
        this.artifactList = artifactList;
        return this;
    }
    public Boolean success;
    public UpdateJobOutput withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    public String warningMessage;
    public UpdateJobOutput withWarningMessage(String warningMessage) {
        this.warningMessage = warningMessage;
        return this;
    }
}