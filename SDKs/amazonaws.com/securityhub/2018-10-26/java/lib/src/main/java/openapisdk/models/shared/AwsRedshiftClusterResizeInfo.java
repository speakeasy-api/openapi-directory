package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsRedshiftClusterResizeInfo
 * Information about the resize operation for the cluster.
**/
public class AwsRedshiftClusterResizeInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowCancelResize")
    public Boolean allowCancelResize;
    public AwsRedshiftClusterResizeInfo withAllowCancelResize(Boolean allowCancelResize) {
        this.allowCancelResize = allowCancelResize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResizeType")
    public String resizeType;
    public AwsRedshiftClusterResizeInfo withResizeType(String resizeType) {
        this.resizeType = resizeType;
        return this;
    }
}