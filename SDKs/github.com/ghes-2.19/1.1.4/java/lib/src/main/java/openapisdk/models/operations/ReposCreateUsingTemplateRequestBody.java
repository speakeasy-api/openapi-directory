package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReposCreateUsingTemplateRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ReposCreateUsingTemplateRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include_all_branches")
    public Boolean includeAllBranches;
    public ReposCreateUsingTemplateRequestBody withIncludeAllBranches(Boolean includeAllBranches) {
        this.includeAllBranches = includeAllBranches;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ReposCreateUsingTemplateRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public String owner;
    public ReposCreateUsingTemplateRequestBody withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private")
    public Boolean private_;
    public ReposCreateUsingTemplateRequestBody withPrivate(Boolean private_) {
        this.private_ = private_;
        return this;
    }
}