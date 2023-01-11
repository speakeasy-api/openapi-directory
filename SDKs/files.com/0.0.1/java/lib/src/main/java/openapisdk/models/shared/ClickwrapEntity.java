package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClickwrapEntity
 * Create Clickwrap
**/
public class ClickwrapEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public ClickwrapEntity withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public ClickwrapEntity withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ClickwrapEntity withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_with_bundles")
    public ClickwrapEntityUseWithBundlesEnum useWithBundles;
    public ClickwrapEntity withUseWithBundles(ClickwrapEntityUseWithBundlesEnum useWithBundles) {
        this.useWithBundles = useWithBundles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_with_inboxes")
    public ClickwrapEntityUseWithInboxesEnum useWithInboxes;
    public ClickwrapEntity withUseWithInboxes(ClickwrapEntityUseWithInboxesEnum useWithInboxes) {
        this.useWithInboxes = useWithInboxes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_with_users")
    public ClickwrapEntityUseWithUsersEnum useWithUsers;
    public ClickwrapEntity withUseWithUsers(ClickwrapEntityUseWithUsersEnum useWithUsers) {
        this.useWithUsers = useWithUsers;
        return this;
    }
}