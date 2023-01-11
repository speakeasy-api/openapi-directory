package openapisdk.models.shared;



/**
 * CreateJobOutput
 * Output structure for the CreateJob operation.
**/
public class CreateJobOutput {
    public Artifact[] artifactList;
    public CreateJobOutput withArtifactList(Artifact[] artifactList) {
        this.artifactList = artifactList;
        return this;
    }
    public String jobId;
    public CreateJobOutput withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    public JobTypeEnum jobType;
    public CreateJobOutput withJobType(JobTypeEnum jobType) {
        this.jobType = jobType;
        return this;
    }
    public String signature;
    public CreateJobOutput withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    public String signatureFileContents;
    public CreateJobOutput withSignatureFileContents(String signatureFileContents) {
        this.signatureFileContents = signatureFileContents;
        return this;
    }
    public String warningMessage;
    public CreateJobOutput withWarningMessage(String warningMessage) {
        this.warningMessage = warningMessage;
        return this;
    }
}