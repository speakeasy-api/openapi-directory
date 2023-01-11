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
    
req = operations.BatchCreatePartitionRequest(
    headers=operations.BatchCreatePartitionHeaders(
        x_amz_algorithm="molestias",
        x_amz_content_sha256="dicta",
        x_amz_credential="voluptatum",
        x_amz_date="numquam",
        x_amz_security_token="et",
        x_amz_signature="ducimus",
        x_amz_signed_headers="ducimus",
        x_amz_target="AWSGlue.BatchCreatePartition",
    ),
    request=shared.BatchCreatePartitionRequest(
        catalog_id="et",
        database_name="nam",
        partition_input_list=[
            shared.PartitionInput(
                last_access_time="1996-05-31T18:29:35Z",
                last_analyzed_time="2014-05-31T19:07:57Z",
                parameters={
                    "deserunt": "illo",
                    "tempore": "velit",
                },
                storage_descriptor=shared.StorageDescriptor(
                    bucket_columns=[
                        "quidem",
                    ],
                    columns=[
                        shared.Column(
                            comment="officiis",
                            name="veniam",
                            parameters={
                                "eius": "nobis",
                                "aliquam": "qui",
                            },
                            type="debitis",
                        ),
                    ],
                    compressed=False,
                    input_format="consequatur",
                    location="iusto",
                    number_of_buckets=8955101836556220093,
                    output_format="iusto",
                    parameters={
                        "ut": "ut",
                    },
                    schema_reference=shared.SchemaReference(
                        schema_id=shared.SchemaID(
                            registry_name="expedita",
                            schema_arn="repellendus",
                            schema_name="commodi",
                        ),
                        schema_version_id="exercitationem",
                        schema_version_number=7459015832090057282,
                    ),
                    serde_info=shared.SerDeInfo(
                        name="perferendis",
                        parameters={
                            "autem": "dolore",
                            "aliquam": "soluta",
                        },
                        serialization_library="accusantium",
                    ),
                    skewed_info=shared.SkewedInfo(
                        skewed_column_names=[
                            "aut",
                            "accusamus",
                        ],
                        skewed_column_value_location_maps={
                            "quisquam": "nihil",
                        },
                        skewed_column_values=[
                            "deleniti",
                        ],
                    ),
                    sort_columns=[
                        shared.Order(
                            column="rem",
                            sort_order=6277689859743485219,
                        ),
                    ],
                    stored_as_sub_directories=False,
                ),
                values=[
                    "magni",
                ],
            ),
            shared.PartitionInput(
                last_access_time="2010-12-05T12:21:37Z",
                last_analyzed_time="2011-08-12T07:40:33Z",
                parameters={
                    "quod": "corporis",
                    "modi": "soluta",
                    "odio": "expedita",
                },
                storage_descriptor=shared.StorageDescriptor(
                    bucket_columns=[
                        "ipsum",
                        "saepe",
                        "ad",
                    ],
                    columns=[
                        shared.Column(
                            comment="delectus",
                            name="suscipit",
                            parameters={
                                "dolor": "ipsa",
                                "quos": "voluptas",
                            },
                            type="laborum",
                        ),
                    ],
                    compressed=False,
                    input_format="iusto",
                    location="et",
                    number_of_buckets=3667925934151297536,
                    output_format="voluptas",
                    parameters={
                        "quia": "voluptas",
                        "corporis": "omnis",
                    },
                    schema_reference=shared.SchemaReference(
                        schema_id=shared.SchemaID(
                            registry_name="dolores",
                            schema_arn="expedita",
                            schema_name="enim",
                        ),
                        schema_version_id="quo",
                        schema_version_number=515727864347354415,
                    ),
                    serde_info=shared.SerDeInfo(
                        name="sequi",
                        parameters={
                            "illo": "enim",
                            "et": "praesentium",
                            "iste": "omnis",
                        },
                        serialization_library="odio",
                    ),
                    skewed_info=shared.SkewedInfo(
                        skewed_column_names=[
                            "adipisci",
                            "quo",
                            "rerum",
                        ],
                        skewed_column_value_location_maps={
                            "suscipit": "fugit",
                        },
                        skewed_column_values=[
                            "ullam",
                            "vero",
                        ],
                    ),
                    sort_columns=[
                        shared.Order(
                            column="et",
                            sort_order=4855648594445967323,
                        ),
                    ],
                    stored_as_sub_directories=False,
                ),
                values=[
                    "nobis",
                    "sunt",
                ],
            ),
            shared.PartitionInput(
                last_access_time="1971-09-16T06:53:03Z",
                last_analyzed_time="1981-11-28T17:23:51Z",
                parameters={
                    "repellendus": "error",
                },
                storage_descriptor=shared.StorageDescriptor(
                    bucket_columns=[
                        "fugit",
                    ],
                    columns=[
                        shared.Column(
                            comment="dolores",
                            name="aut",
                            parameters={
                                "nam": "molestias",
                                "et": "cumque",
                            },
                            type="aut",
                        ),
                    ],
                    compressed=False,
                    input_format="voluptatem",
                    location="provident",
                    number_of_buckets=1615352566432714451,
                    output_format="ullam",
                    parameters={
                        "reprehenderit": "aut",
                    },
                    schema_reference=shared.SchemaReference(
                        schema_id=shared.SchemaID(
                            registry_name="possimus",
                            schema_arn="voluptatibus",
                            schema_name="magni",
                        ),
                        schema_version_id="reiciendis",
                        schema_version_number=2190221129833308991,
                    ),
                    serde_info=shared.SerDeInfo(
                        name="laboriosam",
                        parameters={
                            "laudantium": "nam",
                            "molestiae": "deserunt",
                            "voluptates": "possimus",
                        },
                        serialization_library="et",
                    ),
                    skewed_info=shared.SkewedInfo(
                        skewed_column_names=[
                            "placeat",
                        ],
                        skewed_column_value_location_maps={
                            "vero": "tempore",
                            "rem": "cum",
                            "ut": "inventore",
                        },
                        skewed_column_values=[
                            "aliquam",
                            "ratione",
                        ],
                    ),
                    sort_columns=[
                        shared.Order(
                            column="hic",
                            sort_order=8404441515746634618,
                        ),
                        shared.Order(
                            column="qui",
                            sort_order=4664529193248400784,
                        ),
                    ],
                    stored_as_sub_directories=False,
                ),
                values=[
                    "officia",
                    "dolore",
                ],
            ),
        ],
        table_name="hic",
    ),
)
    
res = s.batch_create_partition(req)

if res.batch_create_partition_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->