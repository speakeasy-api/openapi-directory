package openapisdk.models.shared;



/**
 * DescribeTagsOutput
 * Contains the output for DescribeTags.
**/
public class DescribeTagsOutput {
    public TagDescription[] tagDescriptions;
    public DescribeTagsOutput withTagDescriptions(TagDescription[] tagDescriptions) {
        this.tagDescriptions = tagDescriptions;
        return this;
    }
}