package openapisdk.models.shared;



/**
 * ResizeInfo
 * Describes a resize operation.
**/
public class ResizeInfo {
    public Boolean allowCancelResize;
    public ResizeInfo withAllowCancelResize(Boolean allowCancelResize) {
        this.allowCancelResize = allowCancelResize;
        return this;
    }
    public String resizeType;
    public ResizeInfo withResizeType(String resizeType) {
        this.resizeType = resizeType;
        return this;
    }
}