package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MergeProfilesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FieldSourceProfileIds")
    public MergeProfilesRequestBodyFieldSourceProfileIds fieldSourceProfileIds;
    public MergeProfilesRequestBody withFieldSourceProfileIds(MergeProfilesRequestBodyFieldSourceProfileIds fieldSourceProfileIds) {
        this.fieldSourceProfileIds = fieldSourceProfileIds;
        return this;
    }
    @JsonProperty("MainProfileId")
    public String mainProfileId;
    public MergeProfilesRequestBody withMainProfileId(String mainProfileId) {
        this.mainProfileId = mainProfileId;
        return this;
    }
    @JsonProperty("ProfileIdsToBeMerged")
    public String[] profileIdsToBeMerged;
    public MergeProfilesRequestBody withProfileIdsToBeMerged(String[] profileIdsToBeMerged) {
        this.profileIdsToBeMerged = profileIdsToBeMerged;
        return this;
    }
}