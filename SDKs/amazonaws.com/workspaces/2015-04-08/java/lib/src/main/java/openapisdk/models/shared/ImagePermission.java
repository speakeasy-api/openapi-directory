package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImagePermission
 * Describes the AWS accounts that have been granted permission to use a shared image. For more information about sharing images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html"> Share or Unshare a Custom WorkSpaces Image</a>.
**/
public class ImagePermission {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SharedAccountId")
    public String sharedAccountId;
    public ImagePermission withSharedAccountId(String sharedAccountId) {
        this.sharedAccountId = sharedAccountId;
        return this;
    }
}