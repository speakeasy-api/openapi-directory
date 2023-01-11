<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.SendSSHPublicKeyRequest(
    headers=operations.SendSSHPublicKeyHeaders(
        x_amz_algorithm="doloribus",
        x_amz_content_sha256="ratione",
        x_amz_credential="voluptas",
        x_amz_date="omnis",
        x_amz_security_token="rerum",
        x_amz_signature="possimus",
        x_amz_signed_headers="quo",
        x_amz_target="AWSEC2InstanceConnectService.SendSSHPublicKey",
    ),
    request=shared.SendSSHPublicKeyRequest(
        availability_zone="eos",
        instance_id="enim",
        instance_os_user="temporibus",
        ssh_public_key="exercitationem",
    ),
)
    
res = s.send_ssh_public_key(req)

if res.send_ssh_public_key_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->