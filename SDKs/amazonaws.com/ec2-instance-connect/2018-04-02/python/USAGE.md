<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.SendSSHPublicKeyRequest(
    send_ssh_public_key_request=shared.SendSSHPublicKeyRequest(
        availability_zone="corrupti",
        instance_id="provident",
        instance_os_user="distinctio",
        ssh_public_key="quibusdam",
    ),
    x_amz_algorithm="unde",
    x_amz_content_sha256="nulla",
    x_amz_credential="corrupti",
    x_amz_date="illum",
    x_amz_security_token="vel",
    x_amz_signature="error",
    x_amz_signed_headers="deserunt",
    x_amz_target="AWSEC2InstanceConnectService.SendSSHPublicKey",
)
    
res = s.send_ssh_public_key(req)

if res.send_ssh_public_key_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->