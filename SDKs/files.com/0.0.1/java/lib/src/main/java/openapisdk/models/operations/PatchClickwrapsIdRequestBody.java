package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchClickwrapsIdRequestBody {
    @SpeakeasyMetadata("multipartForm:name=body")
    public String body;
    public PatchClickwrapsIdRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public PatchClickwrapsIdRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=use_with_bundles")
    public PatchClickwrapsIdRequestBodyUseWithBundlesEnum useWithBundles;
    public PatchClickwrapsIdRequestBody withUseWithBundles(PatchClickwrapsIdRequestBodyUseWithBundlesEnum useWithBundles) {
        this.useWithBundles = useWithBundles;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=use_with_inboxes")
    public PatchClickwrapsIdRequestBodyUseWithInboxesEnum useWithInboxes;
    public PatchClickwrapsIdRequestBody withUseWithInboxes(PatchClickwrapsIdRequestBodyUseWithInboxesEnum useWithInboxes) {
        this.useWithInboxes = useWithInboxes;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=use_with_users")
    public PatchClickwrapsIdRequestBodyUseWithUsersEnum useWithUsers;
    public PatchClickwrapsIdRequestBody withUseWithUsers(PatchClickwrapsIdRequestBodyUseWithUsersEnum useWithUsers) {
        this.useWithUsers = useWithUsers;
        return this;
    }
}