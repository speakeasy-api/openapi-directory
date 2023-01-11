package openapisdk.models.shared;



public class ExportImageResult {
    public java.util.Map<String, Object> description;
    public ExportImageResult withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    public java.util.Map<String, Object> diskImageFormat;
    public ExportImageResult withDiskImageFormat(java.util.Map<String, Object> diskImageFormat) {
        this.diskImageFormat = diskImageFormat;
        return this;
    }
    public java.util.Map<String, Object> exportImageTaskId;
    public ExportImageResult withExportImageTaskId(java.util.Map<String, Object> exportImageTaskId) {
        this.exportImageTaskId = exportImageTaskId;
        return this;
    }
    public java.util.Map<String, Object> imageId;
    public ExportImageResult withImageId(java.util.Map<String, Object> imageId) {
        this.imageId = imageId;
        return this;
    }
    public java.util.Map<String, Object> progress;
    public ExportImageResult withProgress(java.util.Map<String, Object> progress) {
        this.progress = progress;
        return this;
    }
    public java.util.Map<String, Object> roleName;
    public ExportImageResult withRoleName(java.util.Map<String, Object> roleName) {
        this.roleName = roleName;
        return this;
    }
    public ExportImageResultS3ExportLocation s3ExportLocation;
    public ExportImageResult withS3ExportLocation(ExportImageResultS3ExportLocation s3ExportLocation) {
        this.s3ExportLocation = s3ExportLocation;
        return this;
    }
    public java.util.Map<String, Object> status;
    public ExportImageResult withStatus(java.util.Map<String, Object> status) {
        this.status = status;
        return this;
    }
    public java.util.Map<String, Object> statusMessage;
    public ExportImageResult withStatusMessage(java.util.Map<String, Object> statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public ExportImageResult withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
}