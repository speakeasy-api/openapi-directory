<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.BatchExecuteStatementRequest(
    batch_execute_statement_input=shared.BatchExecuteStatementInput(
        return_consumed_capacity="TOTAL",
        statements=[
            shared.BatchStatementRequest(
                consistent_read=False,
                parameters=[
                    shared.AttributeValue(
                        b="quibusdam",
                        bool=False,
                        bs=[
                            "nulla",
                            "corrupti",
                            "illum",
                        ],
                        l=[
                            shared.AttributeValue(),
                            shared.AttributeValue(),
                        ],
                        m={
                            "deserunt": shared.AttributeValue(),
                            "suscipit": shared.AttributeValue(),
                            "iure": shared.AttributeValue(),
                        },
                        n="magnam",
                        ns=[
                            "ipsa",
                            "delectus",
                            "tempora",
                            "suscipit",
                        ],
                        null=False,
                        s="molestiae",
                        ss=[
                            "placeat",
                            "voluptatum",
                            "iusto",
                            "excepturi",
                        ],
                    ),
                    shared.AttributeValue(
                        b="nisi",
                        bool=False,
                        bs=[
                            "temporibus",
                            "ab",
                            "quis",
                            "veritatis",
                        ],
                        l=[
                            shared.AttributeValue(),
                            shared.AttributeValue(),
                            shared.AttributeValue(),
                        ],
                        m={
                            "ipsam": shared.AttributeValue(),
                        },
                        n="repellendus",
                        ns=[
                            "quo",
                            "odit",
                            "at",
                            "at",
                        ],
                        null=False,
                        s="maiores",
                        ss=[
                            "quod",
                            "quod",
                        ],
                    ),
                    shared.AttributeValue(
                        b="esse",
                        bool=False,
                        bs=[
                            "porro",
                            "dolorum",
                            "dicta",
                        ],
                        l=[
                            shared.AttributeValue(),
                            shared.AttributeValue(),
                            shared.AttributeValue(),
                        ],
                        m={
                            "occaecati": shared.AttributeValue(),
                            "fugit": shared.AttributeValue(),
                            "deleniti": shared.AttributeValue(),
                        },
                        n="hic",
                        ns=[
                            "totam",
                            "beatae",
                            "commodi",
                            "molestiae",
                        ],
                        null=False,
                        s="modi",
                        ss=[
                            "impedit",
                        ],
                    ),
                ],
                statement="cum",
            ),
            shared.BatchStatementRequest(
                consistent_read=False,
                parameters=[
                    shared.AttributeValue(
                        b="ipsum",
                        bool=False,
                        bs=[
                            "aspernatur",
                            "perferendis",
                            "ad",
                        ],
                        l=[
                            shared.AttributeValue(),
                            shared.AttributeValue(),
                            shared.AttributeValue(),
                        ],
                        m={
                            "iste": shared.AttributeValue(),
                        },
                        n="dolor",
                        ns=[
                            "laboriosam",
                            "hic",
                            "saepe",
                        ],
                        null=False,
                        s="fuga",
                        ss=[
                            "corporis",
                            "iste",
                        ],
                    ),
                    shared.AttributeValue(
                        b="iure",
                        bool=False,
                        bs=[
                            "quidem",
                            "architecto",
                            "ipsa",
                            "reiciendis",
                        ],
                        l=[
                            shared.AttributeValue(),
                            shared.AttributeValue(),
                            shared.AttributeValue(),
                        ],
                        m={
                            "laborum": shared.AttributeValue(),
                            "dolores": shared.AttributeValue(),
                            "dolorem": shared.AttributeValue(),
                        },
                        n="corporis",
                        ns=[
                            "nobis",
                        ],
                        null=False,
                        s="enim",
                        ss=[
                            "nemo",
                            "minima",
                            "excepturi",
                        ],
                    ),
                ],
                statement="accusantium",
            ),
            shared.BatchStatementRequest(
                consistent_read=False,
                parameters=[
                    shared.AttributeValue(
                        b="culpa",
                        bool=False,
                        bs=[
                            "sapiente",
                            "architecto",
                            "mollitia",
                            "dolorem",
                        ],
                        l=[
                            shared.AttributeValue(),
                            shared.AttributeValue(),
                            shared.AttributeValue(),
                        ],
                        m={
                            "repellat": shared.AttributeValue(),
                        },
                        n="mollitia",
                        ns=[
                            "numquam",
                            "commodi",
                            "quam",
                        ],
                        null=False,
                        s="molestiae",
                        ss=[
                            "error",
                        ],
                    ),
                    shared.AttributeValue(
                        b="quia",
                        bool=False,
                        bs=[
                            "vitae",
                            "laborum",
                        ],
                        l=[
                            shared.AttributeValue(),
                            shared.AttributeValue(),
                            shared.AttributeValue(),
                        ],
                        m={
                            "odit": shared.AttributeValue(),
                            "quo": shared.AttributeValue(),
                        },
                        n="sequi",
                        ns=[
                            "ipsam",
                            "id",
                            "possimus",
                            "aut",
                        ],
                        null=False,
                        s="quasi",
                        ss=[
                            "temporibus",
                            "laborum",
                            "quasi",
                        ],
                    ),
                ],
                statement="reiciendis",
            ),
        ],
    ),
    x_amz_algorithm="voluptatibus",
    x_amz_content_sha256="vero",
    x_amz_credential="nihil",
    x_amz_date="praesentium",
    x_amz_security_token="voluptatibus",
    x_amz_signature="ipsa",
    x_amz_signed_headers="omnis",
    x_amz_target="DynamoDB_20120810.BatchExecuteStatement",
)
    
res = s.batch_execute_statement(req)

if res.batch_execute_statement_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->