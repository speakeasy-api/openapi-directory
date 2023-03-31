<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.SaveStatsRequestBody(
    attempt_number=548814,
    job_id=592845,
    stats=shared.AttemptStats(
        bytes_emitted=715190,
        estimated_bytes=844266,
        estimated_records=602763,
        records_committed=857946,
        records_emitted=544883,
        state_messages_emitted=847252,
    ),
    stream_stats=[
        shared.AttemptStreamStats(
            stats=shared.AttemptStats(
                bytes_emitted=623564,
                estimated_bytes=645894,
                estimated_records=384382,
                records_committed=437587,
                records_emitted=297534,
                state_messages_emitted=891773,
            ),
            stream_name="ipsa",
            stream_namespace="delectus",
        ),
        shared.AttemptStreamStats(
            stats=shared.AttemptStats(
                bytes_emitted=272656,
                estimated_bytes=383441,
                estimated_records=477665,
                records_committed=791725,
                records_emitted=812169,
                state_messages_emitted=528895,
            ),
            stream_name="iusto",
            stream_namespace="excepturi",
        ),
    ],
)
    
res = s.attempt.save_stats(req)

if res.internal_operation_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->