package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteProfileObjectRequestBody {
    @JsonProperty("ObjectTypeName")
    public String objectTypeName;
    public DeleteProfileObjectRequestBody withObjectTypeName(String objectTypeName) {
        this.objectTypeName = objectTypeName;
        return this;
    }
    @JsonProperty("ProfileId")
    public String profileId;
    public DeleteProfileObjectRequestBody withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
    @JsonProperty("ProfileObjectUniqueKey")
    public String profileObjectUniqueKey;
    public DeleteProfileObjectRequestBody withProfileObjectUniqueKey(String profileObjectUniqueKey) {
        this.profileObjectUniqueKey = profileObjectUniqueKey;
        return this;
    }
}