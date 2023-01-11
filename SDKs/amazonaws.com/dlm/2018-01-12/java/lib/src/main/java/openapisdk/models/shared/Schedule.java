package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Schedule
 * Specifies a backup schedule for a snapshot or AMI lifecycle policy.
**/
public class Schedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CopyTags")
    public Boolean copyTags;
    public Schedule withCopyTags(Boolean copyTags) {
        this.copyTags = copyTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreateRule")
    public CreateRule createRule;
    public Schedule withCreateRule(CreateRule createRule) {
        this.createRule = createRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CrossRegionCopyRules")
    public CrossRegionCopyRule[] crossRegionCopyRules;
    public Schedule withCrossRegionCopyRules(CrossRegionCopyRule[] crossRegionCopyRules) {
        this.crossRegionCopyRules = crossRegionCopyRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeprecateRule")
    public DeprecateRule deprecateRule;
    public Schedule withDeprecateRule(DeprecateRule deprecateRule) {
        this.deprecateRule = deprecateRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FastRestoreRule")
    public FastRestoreRule fastRestoreRule;
    public Schedule withFastRestoreRule(FastRestoreRule fastRestoreRule) {
        this.fastRestoreRule = fastRestoreRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public Schedule withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetainRule")
    public RetainRule retainRule;
    public Schedule withRetainRule(RetainRule retainRule) {
        this.retainRule = retainRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShareRules")
    public ShareRule[] shareRules;
    public Schedule withShareRules(ShareRule[] shareRules) {
        this.shareRules = shareRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TagsToAdd")
    public Tag[] tagsToAdd;
    public Schedule withTagsToAdd(Tag[] tagsToAdd) {
        this.tagsToAdd = tagsToAdd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VariableTags")
    public Tag[] variableTags;
    public Schedule withVariableTags(Tag[] variableTags) {
        this.variableTags = variableTags;
        return this;
    }
}