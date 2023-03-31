<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteAssignmentsIDRequest(
    id="corrupti",
)
    
res = s.assignment.delete_assignments_id_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->