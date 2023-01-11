package openapisdk.models.shared;



/**
 * UserGroupPendingChanges
 * Returns the updates being applied to the user group.
**/
public class UserGroupPendingChanges {
    public String[] userIdsToAdd;
    public UserGroupPendingChanges withUserIdsToAdd(String[] userIdsToAdd) {
        this.userIdsToAdd = userIdsToAdd;
        return this;
    }
    public String[] userIdsToRemove;
    public UserGroupPendingChanges withUserIdsToRemove(String[] userIdsToRemove) {
        this.userIdsToRemove = userIdsToRemove;
        return this;
    }
}