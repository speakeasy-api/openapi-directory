package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BranchShort
 * Branch Short
**/
public class BranchShort {
    @JsonProperty("commit")
    public BranchShortCommit commit;
    public BranchShort withCommit(BranchShortCommit commit) {
        this.commit = commit;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public BranchShort withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("protected")
    public Boolean protected_;
    public BranchShort withProtected(Boolean protected_) {
        this.protected_ = protected_;
        return this;
    }
}