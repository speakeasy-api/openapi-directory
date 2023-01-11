package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * GetStatusOutput
 * Output structure for the GetStatus operation.
**/
public class GetStatusOutput {
    public Artifact[] artifactList;
    public GetStatusOutput withArtifactList(Artifact[] artifactList) {
        this.artifactList = artifactList;
        return this;
    }
    public String carrier;
    public GetStatusOutput withCarrier(String carrier) {
        this.carrier = carrier;
        return this;
    }
    public OffsetDateTime creationDate;
    public GetStatusOutput withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    public String currentManifest;
    public GetStatusOutput withCurrentManifest(String currentManifest) {
        this.currentManifest = currentManifest;
        return this;
    }
    public Long errorCount;
    public GetStatusOutput withErrorCount(Long errorCount) {
        this.errorCount = errorCount;
        return this;
    }
    public String jobId;
    public GetStatusOutput withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    public JobTypeEnum jobType;
    public GetStatusOutput withJobType(JobTypeEnum jobType) {
        this.jobType = jobType;
        return this;
    }
    public String locationCode;
    public GetStatusOutput withLocationCode(String locationCode) {
        this.locationCode = locationCode;
        return this;
    }
    public String locationMessage;
    public GetStatusOutput withLocationMessage(String locationMessage) {
        this.locationMessage = locationMessage;
        return this;
    }
    public String logBucket;
    public GetStatusOutput withLogBucket(String logBucket) {
        this.logBucket = logBucket;
        return this;
    }
    public String logKey;
    public GetStatusOutput withLogKey(String logKey) {
        this.logKey = logKey;
        return this;
    }
    public String progressCode;
    public GetStatusOutput withProgressCode(String progressCode) {
        this.progressCode = progressCode;
        return this;
    }
    public String progressMessage;
    public GetStatusOutput withProgressMessage(String progressMessage) {
        this.progressMessage = progressMessage;
        return this;
    }
    public String signature;
    public GetStatusOutput withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    public String signatureFileContents;
    public GetStatusOutput withSignatureFileContents(String signatureFileContents) {
        this.signatureFileContents = signatureFileContents;
        return this;
    }
    public String trackingNumber;
    public GetStatusOutput withTrackingNumber(String trackingNumber) {
        this.trackingNumber = trackingNumber;
        return this;
    }
}