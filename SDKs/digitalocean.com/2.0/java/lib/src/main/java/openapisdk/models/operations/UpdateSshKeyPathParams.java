package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSshKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ssh_key_identifier")
    public Object sshKeyIdentifier;
    public UpdateSshKeyPathParams withSshKeyIdentifier(Object sshKeyIdentifier) {
        this.sshKeyIdentifier = sshKeyIdentifier;
        return this;
    }
}