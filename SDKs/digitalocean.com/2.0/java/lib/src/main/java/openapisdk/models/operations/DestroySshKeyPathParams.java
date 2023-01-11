package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DestroySshKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ssh_key_identifier")
    public Object sshKeyIdentifier;
    public DestroySshKeyPathParams withSshKeyIdentifier(Object sshKeyIdentifier) {
        this.sshKeyIdentifier = sshKeyIdentifier;
        return this;
    }
}