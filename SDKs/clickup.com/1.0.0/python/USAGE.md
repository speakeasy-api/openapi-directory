<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateANewQuestionRequestBody(
    choices=[
        "provident",
        "distinctio",
        "quibusdam",
    ],
    question="unde",
)
    
res = s.create_a_new_question(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->