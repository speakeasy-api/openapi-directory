<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteBusinessGroupsIDSpacesSpaceIDRequest(
    id="P18784",
    space_id="P18784",
)
    
res = s.delete_business_groups_id_spaces_space_id_(req, operations.DeleteBusinessGroupsIDSpacesSpaceIDSecurity(
    gma_auth="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->