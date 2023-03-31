<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.BatchPutPropertyValuesRequest(
    request_body=operations.BatchPutPropertyValuesRequestBody(
        entries=[
            shared.PropertyValueEntry(
                entity_property_reference=shared.EntityPropertyReference(
                    component_name="provident",
                    entity_id="distinctio",
                    external_id_property={
                        "unde": "nulla",
                        "corrupti": "illum",
                        "vel": "error",
                        "deserunt": "suscipit",
                    },
                    property_name="iure",
                ),
                property_values=[
                    shared.PropertyValue(
                        time="debitis",
                        timestamp="2022-01-14T06:18:51.036Z",
                        value=shared.DataValue(
                            boolean_value=False,
                            double_value=2726.56,
                            expression="suscipit",
                            integer_value=477665,
                            list_value=[
                                shared.DataValue(),
                                shared.DataValue(),
                                shared.DataValue(),
                                shared.DataValue(),
                            ],
                            long_value=812169,
                            map_value={
                                "iusto": shared.DataValue(),
                                "excepturi": shared.DataValue(),
                                "nisi": shared.DataValue(),
                            },
                            relationship_value=shared.RelationshipValue(
                                target_component_name="recusandae",
                                target_entity_id="temporibus",
                            ),
                            string_value="ab",
                        ),
                    ),
                    shared.PropertyValue(
                        time="quis",
                        timestamp="2022-05-09T10:00:51.349Z",
                        value=shared.DataValue(
                            boolean_value=False,
                            double_value=202.18,
                            expression="ipsam",
                            integer_value=832620,
                            list_value=[
                                shared.DataValue(),
                                shared.DataValue(),
                                shared.DataValue(),
                                shared.DataValue(),
                            ],
                            long_value=778157,
                            map_value={
                                "at": shared.DataValue(),
                            },
                            relationship_value=shared.RelationshipValue(
                                target_component_name="at",
                                target_entity_id="maiores",
                            ),
                            string_value="molestiae",
                        ),
                    ),
                ],
            ),
            shared.PropertyValueEntry(
                entity_property_reference=shared.EntityPropertyReference(
                    component_name="quod",
                    entity_id="quod",
                    external_id_property={
                        "totam": "porro",
                        "dolorum": "dicta",
                    },
                    property_name="nam",
                ),
                property_values=[
                    shared.PropertyValue(
                        time="occaecati",
                        timestamp="2022-06-18T20:36:37.412Z",
                        value=shared.DataValue(
                            boolean_value=False,
                            double_value=9446.69,
                            expression="optio",
                            integer_value=521848,
                            list_value=[
                                shared.DataValue(),
                            ],
                            long_value=414662,
                            map_value={
                                "modi": shared.DataValue(),
                                "qui": shared.DataValue(),
                            },
                            relationship_value=shared.RelationshipValue(
                                target_component_name="impedit",
                                target_entity_id="cum",
                            ),
                            string_value="esse",
                        ),
                    ),
                    shared.PropertyValue(
                        time="ipsum",
                        timestamp="2022-09-24T06:58:38.511Z",
                        value=shared.DataValue(
                            boolean_value=False,
                            double_value=187.89,
                            expression="ad",
                            integer_value=617636,
                            list_value=[
                                shared.DataValue(),
                            ],
                            long_value=612096,
                            map_value={
                                "natus": shared.DataValue(),
                            },
                            relationship_value=shared.RelationshipValue(
                                target_component_name="laboriosam",
                                target_entity_id="hic",
                            ),
                            string_value="saepe",
                        ),
                    ),
                    shared.PropertyValue(
                        time="fuga",
                        timestamp="2022-08-22T18:42:38.160Z",
                        value=shared.DataValue(
                            boolean_value=False,
                            double_value=6130.64,
                            expression="iure",
                            integer_value=902349,
                            list_value=[
                                shared.DataValue(),
                                shared.DataValue(),
                                shared.DataValue(),
                            ],
                            long_value=99280,
                            map_value={
                                "reiciendis": shared.DataValue(),
                            },
                            relationship_value=shared.RelationshipValue(
                                target_component_name="est",
                                target_entity_id="mollitia",
                            ),
                            string_value="laborum",
                        ),
                    ),
                ],
            ),
            shared.PropertyValueEntry(
                entity_property_reference=shared.EntityPropertyReference(
                    component_name="dolores",
                    entity_id="dolorem",
                    external_id_property={
                        "explicabo": "nobis",
                        "enim": "omnis",
                    },
                    property_name="nemo",
                ),
                property_values=[
                    shared.PropertyValue(
                        time="excepturi",
                        timestamp="2022-07-24T21:51:02.112Z",
                        value=shared.DataValue(
                            boolean_value=False,
                            double_value=6342.74,
                            expression="doloribus",
                            integer_value=958950,
                            list_value=[
                                shared.DataValue(),
                            ],
                            long_value=652790,
                            map_value={
                                "culpa": shared.DataValue(),
                            },
                            relationship_value=shared.RelationshipValue(
                                target_component_name="consequuntur",
                                target_entity_id="repellat",
                            ),
                            string_value="mollitia",
                        ),
                    ),
                    shared.PropertyValue(
                        time="occaecati",
                        timestamp="2022-08-02T18:07:51.623Z",
                        value=shared.DataValue(
                            boolean_value=False,
                            double_value=4663.11,
                            expression="molestiae",
                            integer_value=244425,
                            list_value=[
                                shared.DataValue(),
                                shared.DataValue(),
                                shared.DataValue(),
                            ],
                            long_value=158969,
                            map_value={
                                "vitae": shared.DataValue(),
                                "laborum": shared.DataValue(),
                            },
                            relationship_value=shared.RelationshipValue(
                                target_component_name="animi",
                                target_entity_id="enim",
                            ),
                            string_value="odit",
                        ),
                    ),
                ],
            ),
        ],
    ),
    x_amz_algorithm="quo",
    x_amz_content_sha256="sequi",
    x_amz_credential="tenetur",
    x_amz_date="ipsam",
    x_amz_security_token="id",
    x_amz_signature="possimus",
    x_amz_signed_headers="aut",
    workspace_id="quasi",
)
    
res = s.batch_put_property_values(req)

if res.batch_put_property_values_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->