package openapisdk.models.shared;



/**
 * ResizeProgressMessage
 * Describes the result of a cluster resize operation.
**/
public class ResizeProgressMessage {
    public Double avgResizeRateInMegaBytesPerSecond;
    public ResizeProgressMessage withAvgResizeRateInMegaBytesPerSecond(Double avgResizeRateInMegaBytesPerSecond) {
        this.avgResizeRateInMegaBytesPerSecond = avgResizeRateInMegaBytesPerSecond;
        return this;
    }
    public Double dataTransferProgressPercent;
    public ResizeProgressMessage withDataTransferProgressPercent(Double dataTransferProgressPercent) {
        this.dataTransferProgressPercent = dataTransferProgressPercent;
        return this;
    }
    public Long elapsedTimeInSeconds;
    public ResizeProgressMessage withElapsedTimeInSeconds(Long elapsedTimeInSeconds) {
        this.elapsedTimeInSeconds = elapsedTimeInSeconds;
        return this;
    }
    public Long estimatedTimeToCompletionInSeconds;
    public ResizeProgressMessage withEstimatedTimeToCompletionInSeconds(Long estimatedTimeToCompletionInSeconds) {
        this.estimatedTimeToCompletionInSeconds = estimatedTimeToCompletionInSeconds;
        return this;
    }
    public String[] importTablesCompleted;
    public ResizeProgressMessage withImportTablesCompleted(String[] importTablesCompleted) {
        this.importTablesCompleted = importTablesCompleted;
        return this;
    }
    public String[] importTablesInProgress;
    public ResizeProgressMessage withImportTablesInProgress(String[] importTablesInProgress) {
        this.importTablesInProgress = importTablesInProgress;
        return this;
    }
    public String[] importTablesNotStarted;
    public ResizeProgressMessage withImportTablesNotStarted(String[] importTablesNotStarted) {
        this.importTablesNotStarted = importTablesNotStarted;
        return this;
    }
    public String message;
    public ResizeProgressMessage withMessage(String message) {
        this.message = message;
        return this;
    }
    public Long progressInMegaBytes;
    public ResizeProgressMessage withProgressInMegaBytes(Long progressInMegaBytes) {
        this.progressInMegaBytes = progressInMegaBytes;
        return this;
    }
    public String resizeType;
    public ResizeProgressMessage withResizeType(String resizeType) {
        this.resizeType = resizeType;
        return this;
    }
    public String status;
    public ResizeProgressMessage withStatus(String status) {
        this.status = status;
        return this;
    }
    public String targetClusterType;
    public ResizeProgressMessage withTargetClusterType(String targetClusterType) {
        this.targetClusterType = targetClusterType;
        return this;
    }
    public String targetEncryptionType;
    public ResizeProgressMessage withTargetEncryptionType(String targetEncryptionType) {
        this.targetEncryptionType = targetEncryptionType;
        return this;
    }
    public String targetNodeType;
    public ResizeProgressMessage withTargetNodeType(String targetNodeType) {
        this.targetNodeType = targetNodeType;
        return this;
    }
    public Long targetNumberOfNodes;
    public ResizeProgressMessage withTargetNumberOfNodes(Long targetNumberOfNodes) {
        this.targetNumberOfNodes = targetNumberOfNodes;
        return this;
    }
    public Long totalResizeDataInMegaBytes;
    public ResizeProgressMessage withTotalResizeDataInMegaBytes(Long totalResizeDataInMegaBytes) {
        this.totalResizeDataInMegaBytes = totalResizeDataInMegaBytes;
        return this;
    }
}