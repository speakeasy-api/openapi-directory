<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateAutoPredictorRequest(
    create_auto_predictor_request=shared.CreateAutoPredictorRequest(
        data_config=shared.DataConfig(
            additional_datasets=[
                shared.AdditionalDataset(
                    configuration={
                        "distinctio": [
                            "unde",
                            "nulla",
                            "corrupti",
                            "illum",
                        ],
                        "vel": [
                            "deserunt",
                            "suscipit",
                            "iure",
                        ],
                        "magnam": [
                            "ipsa",
                            "delectus",
                            "tempora",
                            "suscipit",
                        ],
                    },
                    name="molestiae",
                ),
                shared.AdditionalDataset(
                    configuration={
                        "placeat": [
                            "iusto",
                            "excepturi",
                            "nisi",
                        ],
                        "recusandae": [
                            "ab",
                            "quis",
                            "veritatis",
                            "deserunt",
                        ],
                        "perferendis": [
                            "repellendus",
                            "sapiente",
                        ],
                        "quo": [
                            "at",
                        ],
                    },
                    name="at",
                ),
                shared.AdditionalDataset(
                    configuration={
                        "molestiae": [
                            "quod",
                            "esse",
                            "totam",
                            "porro",
                        ],
                        "dolorum": [
                            "nam",
                        ],
                        "officia": [
                            "fugit",
                            "deleniti",
                            "hic",
                        ],
                        "optio": [
                            "beatae",
                            "commodi",
                            "molestiae",
                        ],
                    },
                    name="modi",
                ),
            ],
            attribute_configs=[
                shared.AttributeConfig(
                    attribute_name="impedit",
                    transformations={
                        "esse": "ipsum",
                        "excepturi": "aspernatur",
                        "perferendis": "ad",
                    },
                ),
            ],
            dataset_group_arn="natus",
        ),
        encryption_config=shared.EncryptionConfig(
            kms_key_arn="sed",
            role_arn="iste",
        ),
        explain_predictor=False,
        forecast_dimensions=[
            "natus",
        ],
        forecast_frequency="laboriosam",
        forecast_horizon=943749,
        forecast_types=[
            "fuga",
            "in",
            "corporis",
            "iste",
        ],
        monitor_config=shared.MonitorConfig(
            monitor_name="iure",
        ),
        optimization_metric="MAPE",
        predictor_name="quidem",
        reference_predictor_arn="architecto",
        tags=[
            shared.Tag(
                key="reiciendis",
                value="est",
            ),
        ],
        time_alignment_boundary=shared.TimeAlignmentBoundary(
            day_of_month=653140,
            day_of_week="FRIDAY",
            hour=170909,
            month="MARCH",
        ),
    ),
    x_amz_algorithm="corporis",
    x_amz_content_sha256="explicabo",
    x_amz_credential="nobis",
    x_amz_date="enim",
    x_amz_security_token="omnis",
    x_amz_signature="nemo",
    x_amz_signed_headers="minima",
    x_amz_target="AmazonForecast.CreateAutoPredictor",
)
    
res = s.create_auto_predictor(req)

if res.create_auto_predictor_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->