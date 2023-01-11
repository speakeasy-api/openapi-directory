package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostUsersUseridLinkRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forceLanguage")
    public String forceLanguage;
    public PostUsersUseridLinkRequestBody withForceLanguage(String forceLanguage) {
        this.forceLanguage = forceLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkMultiple")
    public Boolean linkMultiple;
    public PostUsersUseridLinkRequestBody withLinkMultiple(Boolean linkMultiple) {
        this.linkMultiple = linkMultiple;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userImage")
    public String userImage;
    public PostUsersUseridLinkRequestBody withUserImage(String userImage) {
        this.userImage = userImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userName")
    public String userName;
    public PostUsersUseridLinkRequestBody withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vendor")
    public PostUsersUseridLinkRequestBodyVendorEnum vendor;
    public PostUsersUseridLinkRequestBody withVendor(PostUsersUseridLinkRequestBodyVendorEnum vendor) {
        this.vendor = vendor;
        return this;
    }
}