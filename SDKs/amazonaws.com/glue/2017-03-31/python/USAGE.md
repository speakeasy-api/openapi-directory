<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.BatchCreatePartitionRequest(
    batch_create_partition_request=shared.BatchCreatePartitionRequest(
        catalog_id="corrupti",
        database_name="provident",
        partition_input_list=[
            shared.PartitionInput(
                last_access_time="2021-03-11T23:22:42.658Z",
                last_analyzed_time="2021-05-14T08:28:11.899Z",
                parameters={
                    "vel": "error",
                    "deserunt": "suscipit",
                    "iure": "magnam",
                    "debitis": "ipsa",
                },
                storage_descriptor=shared.StorageDescriptor(
                    additional_locations=[
                        "tempora",
                        "suscipit",
                        "molestiae",
                        "minus",
                    ],
                    bucket_columns=[
                        "voluptatum",
                        "iusto",
                        "excepturi",
                        "nisi",
                    ],
                    columns=[
                        shared.Column(
                            comment="temporibus",
                            name="ab",
                            parameters={
                                "veritatis": "deserunt",
                                "perferendis": "ipsam",
                            },
                            type="repellendus",
                        ),
                        shared.Column(
                            comment="sapiente",
                            name="quo",
                            parameters={
                                "at": "at",
                            },
                            type="maiores",
                        ),
                        shared.Column(
                            comment="molestiae",
                            name="quod",
                            parameters={
                                "esse": "totam",
                                "porro": "dolorum",
                                "dicta": "nam",
                                "officia": "occaecati",
                            },
                            type="fugit",
                        ),
                        shared.Column(
                            comment="deleniti",
                            name="hic",
                            parameters={
                                "totam": "beatae",
                                "commodi": "molestiae",
                                "modi": "qui",
                                "impedit": "cum",
                            },
                            type="esse",
                        ),
                    ],
                    compressed=False,
                    input_format="ipsum",
                    location="excepturi",
                    number_of_buckets=135218,
                    output_format="perferendis",
                    parameters={
                        "natus": "sed",
                        "iste": "dolor",
                    },
                    schema_reference=shared.SchemaReference(
                        schema_id=shared.SchemaID(
                            registry_name="natus",
                            schema_arn="laboriosam",
                            schema_name="hic",
                        ),
                        schema_version_id="saepe",
                        schema_version_number=681820,
                    ),
                    serde_info=shared.SerDeInfo(
                        name="in",
                        parameters={
                            "iste": "iure",
                            "saepe": "quidem",
                        },
                        serialization_library="architecto",
                    ),
                    skewed_info=shared.SkewedInfo(
                        skewed_column_names=[
                            "reiciendis",
                        ],
                        skewed_column_value_location_maps={
                            "mollitia": "laborum",
                            "dolores": "dolorem",
                            "corporis": "explicabo",
                        },
                        skewed_column_values=[
                            "enim",
                            "omnis",
                            "nemo",
                            "minima",
                        ],
                    ),
                    sort_columns=[
                        shared.Order(
                            column="accusantium",
                            sort_order=438601,
                        ),
                        shared.Order(
                            column="culpa",
                            sort_order=988374,
                        ),
                        shared.Order(
                            column="sapiente",
                            sort_order=102044,
                        ),
                    ],
                    stored_as_sub_directories=False,
                ),
                values=[
                    "dolorem",
                    "culpa",
                    "consequuntur",
                ],
            ),
            shared.PartitionInput(
                last_access_time="2021-01-15T20:18:47.519Z",
                last_analyzed_time="2022-06-30T02:19:51.375Z",
                parameters={
                    "quam": "molestiae",
                    "velit": "error",
                },
                storage_descriptor=shared.StorageDescriptor(
                    additional_locations=[
                        "quis",
                    ],
                    bucket_columns=[
                        "laborum",
                    ],
                    columns=[
                        shared.Column(
                            comment="enim",
                            name="odit",
                            parameters={
                                "sequi": "tenetur",
                                "ipsam": "id",
                                "possimus": "aut",
                                "quasi": "error",
                            },
                            type="temporibus",
                        ),
                        shared.Column(
                            comment="laborum",
                            name="quasi",
                            parameters={
                                "voluptatibus": "vero",
                                "nihil": "praesentium",
                                "voluptatibus": "ipsa",
                                "omnis": "voluptate",
                            },
                            type="cum",
                        ),
                        shared.Column(
                            comment="perferendis",
                            name="doloremque",
                            parameters={
                                "ut": "maiores",
                                "dicta": "corporis",
                            },
                            type="dolore",
                        ),
                    ],
                    compressed=False,
                    input_format="iusto",
                    location="dicta",
                    number_of_buckets=688661,
                    output_format="enim",
                    parameters={
                        "commodi": "repudiandae",
                        "quae": "ipsum",
                        "quidem": "molestias",
                        "excepturi": "pariatur",
                    },
                    schema_reference=shared.SchemaReference(
                        schema_id=shared.SchemaID(
                            registry_name="modi",
                            schema_arn="praesentium",
                            schema_name="rem",
                        ),
                        schema_version_id="voluptates",
                        schema_version_number=93940,
                    ),
                    serde_info=shared.SerDeInfo(
                        name="repudiandae",
                        parameters={
                            "veritatis": "itaque",
                            "incidunt": "enim",
                            "consequatur": "est",
                        },
                        serialization_library="quibusdam",
                    ),
                    skewed_info=shared.SkewedInfo(
                        skewed_column_names=[
                            "deserunt",
                        ],
                        skewed_column_value_location_maps={
                            "quibusdam": "labore",
                            "modi": "qui",
                            "aliquid": "cupiditate",
                        },
                        skewed_column_values=[
                            "perferendis",
                            "magni",
                            "assumenda",
                        ],
                    ),
                    sort_columns=[
                        shared.Order(
                            column="alias",
                            sort_order=146441,
                        ),
                        shared.Order(
                            column="dolorum",
                            sort_order=569618,
                        ),
                    ],
                    stored_as_sub_directories=False,
                ),
                values=[
                    "facilis",
                    "tempore",
                ],
            ),
            shared.PartitionInput(
                last_access_time="2022-01-14T19:13:42.009Z",
                last_analyzed_time="2022-10-02T04:55:20.234Z",
                parameters={
                    "sint": "aliquid",
                    "provident": "necessitatibus",
                    "sint": "officia",
                    "dolor": "debitis",
                },
                storage_descriptor=shared.StorageDescriptor(
                    additional_locations=[
                        "dolorum",
                        "in",
                        "in",
                        "illum",
                    ],
                    bucket_columns=[
                        "rerum",
                        "dicta",
                        "magnam",
                        "cumque",
                    ],
                    columns=[
                        shared.Column(
                            comment="ea",
                            name="aliquid",
                            parameters={
                                "accusamus": "non",
                                "occaecati": "enim",
                                "accusamus": "delectus",
                            },
                            type="quidem",
                        ),
                        shared.Column(
                            comment="provident",
                            name="nam",
                            parameters={
                                "blanditiis": "deleniti",
                                "sapiente": "amet",
                                "deserunt": "nisi",
                            },
                            type="vel",
                        ),
                        shared.Column(
                            comment="natus",
                            name="omnis",
                            parameters={
                                "perferendis": "nihil",
                                "magnam": "distinctio",
                            },
                            type="id",
                        ),
                        shared.Column(
                            comment="labore",
                            name="labore",
                            parameters={
                                "natus": "nobis",
                                "eum": "vero",
                            },
                            type="aspernatur",
                        ),
                    ],
                    compressed=False,
                    input_format="architecto",
                    location="magnam",
                    number_of_buckets=92373,
                    output_format="excepturi",
                    parameters={
                        "provident": "quos",
                        "sint": "accusantium",
                    },
                    schema_reference=shared.SchemaReference(
                        schema_id=shared.SchemaID(
                            registry_name="mollitia",
                            schema_arn="reiciendis",
                            schema_name="mollitia",
                        ),
                        schema_version_id="ad",
                        schema_version_number=431418,
                    ),
                    serde_info=shared.SerDeInfo(
                        name="dolor",
                        parameters={
                            "odit": "nemo",
                            "quasi": "iure",
                            "doloribus": "debitis",
                            "eius": "maxime",
                        },
                        serialization_library="deleniti",
                    ),
                    skewed_info=shared.SkewedInfo(
                        skewed_column_names=[
                            "in",
                            "architecto",
                            "architecto",
                        ],
                        skewed_column_value_location_maps={
                            "ullam": "expedita",
                            "nihil": "repellat",
                            "quibusdam": "sed",
                            "saepe": "pariatur",
                        },
                        skewed_column_values=[
                            "consequuntur",
                        ],
                    ),
                    sort_columns=[
                        shared.Order(
                            column="natus",
                            sort_order=166847,
                        ),
                        shared.Order(
                            column="sunt",
                            sort_order=779051,
                        ),
                        shared.Order(
                            column="illum",
                            sort_order=864934,
                        ),
                    ],
                    stored_as_sub_directories=False,
                ),
                values=[
                    "ea",
                    "excepturi",
                    "odit",
                    "ea",
                ],
            ),
        ],
        table_name="accusantium",
    ),
    x_amz_algorithm="ab",
    x_amz_content_sha256="maiores",
    x_amz_credential="quidem",
    x_amz_date="ipsam",
    x_amz_security_token="voluptate",
    x_amz_signature="autem",
    x_amz_signed_headers="nam",
    x_amz_target="AWSGlue.BatchCreatePartition",
)
    
res = s.batch_create_partition(req)

if res.batch_create_partition_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->