package openapisdk.models.shared;



/**
 * KeyGroupSummaryList
 * Contains information about a key group.
**/
public class KeyGroupSummaryList {
    public KeyGroup keyGroup;
    public KeyGroupSummaryList withKeyGroup(KeyGroup keyGroup) {
        this.keyGroup = keyGroup;
        return this;
    }
}