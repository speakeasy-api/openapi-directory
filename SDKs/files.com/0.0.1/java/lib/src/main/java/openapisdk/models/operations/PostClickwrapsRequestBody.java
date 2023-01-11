package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostClickwrapsRequestBody {
    @SpeakeasyMetadata("multipartForm:name=body")
    public String body;
    public PostClickwrapsRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public PostClickwrapsRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=use_with_bundles")
    public PostClickwrapsRequestBodyUseWithBundlesEnum useWithBundles;
    public PostClickwrapsRequestBody withUseWithBundles(PostClickwrapsRequestBodyUseWithBundlesEnum useWithBundles) {
        this.useWithBundles = useWithBundles;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=use_with_inboxes")
    public PostClickwrapsRequestBodyUseWithInboxesEnum useWithInboxes;
    public PostClickwrapsRequestBody withUseWithInboxes(PostClickwrapsRequestBodyUseWithInboxesEnum useWithInboxes) {
        this.useWithInboxes = useWithInboxes;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=use_with_users")
    public PostClickwrapsRequestBodyUseWithUsersEnum useWithUsers;
    public PostClickwrapsRequestBody withUseWithUsers(PostClickwrapsRequestBodyUseWithUsersEnum useWithUsers) {
        this.useWithUsers = useWithUsers;
        return this;
    }
}