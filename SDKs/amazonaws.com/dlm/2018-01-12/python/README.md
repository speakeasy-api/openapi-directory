# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
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
    
req = operations.CreateLifecyclePolicyRequest(
    headers=operations.CreateLifecyclePolicyHeaders(
        x_amz_algorithm="doloremque",
        x_amz_content_sha256="nulla",
        x_amz_credential="et",
        x_amz_date="ut",
        x_amz_security_token="praesentium",
        x_amz_signature="labore",
        x_amz_signed_headers="accusamus",
    ),
    request=operations.CreateLifecyclePolicyRequestBody(
        description="aut",
        execution_role_arn="alias",
        policy_details=operations.CreateLifecyclePolicyRequestBodyPolicyDetails(
            actions=[
                shared.Action(
                    cross_region_copy=[
                        shared.CrossRegionCopyAction(
                            encryption_configuration=shared.EncryptionConfiguration(
                                cmk_arn="voluptatem",
                                encrypted=False,
                            ),
                            retain_rule=shared.CrossRegionCopyRetainRule(
                                interval=5320768077586043095,
                                interval_unit="DAYS",
                            ),
                            target="nostrum",
                        ),
                        shared.CrossRegionCopyAction(
                            encryption_configuration=shared.EncryptionConfiguration(
                                cmk_arn="adipisci",
                                encrypted=True,
                            ),
                            retain_rule=shared.CrossRegionCopyRetainRule(
                                interval=6537984888763423894,
                                interval_unit="WEEKS",
                            ),
                            target="delectus",
                        ),
                    ],
                    name="tenetur",
                ),
                shared.Action(
                    cross_region_copy=[
                        shared.CrossRegionCopyAction(
                            encryption_configuration=shared.EncryptionConfiguration(
                                cmk_arn="quia",
                                encrypted=True,
                            ),
                            retain_rule=shared.CrossRegionCopyRetainRule(
                                interval=8697756961697963853,
                                interval_unit="YEARS",
                            ),
                            target="nostrum",
                        ),
                        shared.CrossRegionCopyAction(
                            encryption_configuration=shared.EncryptionConfiguration(
                                cmk_arn="autem",
                                encrypted=True,
                            ),
                            retain_rule=shared.CrossRegionCopyRetainRule(
                                interval=4506911669298280718,
                                interval_unit="YEARS",
                            ),
                            target="molestias",
                        ),
                    ],
                    name="nihil",
                ),
            ],
            event_source=shared.EventSource(
                parameters=shared.EventParameters(
                    description_regex="consequatur",
                    event_type="shareSnapshot",
                    snapshot_owner=[
                        "quae",
                        "natus",
                    ],
                ),
                type="MANAGED_CWE",
            ),
            parameters=shared.Parameters(
                exclude_boot_volume=False,
                no_reboot=True,
            ),
            policy_type="EBS_SNAPSHOT_MANAGEMENT",
            resource_locations=[
                "OUTPOST",
                "CLOUD",
            ],
            resource_types=[
                "INSTANCE",
                "INSTANCE",
                "INSTANCE",
            ],
            schedules=[
                shared.Schedule(
                    copy_tags=False,
                    create_rule=shared.CreateRule(
                        cron_expression="sapiente",
                        interval=4642672273651120892,
                        interval_unit="HOURS",
                        location="CLOUD",
                        times=[
                            "quo",
                        ],
                    ),
                    cross_region_copy_rules=[
                        shared.CrossRegionCopyRule(
                            cmk_arn="ratione",
                            copy_tags=False,
                            deprecate_rule=shared.CrossRegionCopyDeprecateRule(
                                interval=6134675409536001115,
                                interval_unit="DAYS",
                            ),
                            encrypted=True,
                            retain_rule=shared.CrossRegionCopyRetainRule(
                                interval=1000668831263546934,
                                interval_unit="MONTHS",
                            ),
                            target="aut",
                            target_region="minima",
                        ),
                        shared.CrossRegionCopyRule(
                            cmk_arn="at",
                            copy_tags=True,
                            deprecate_rule=shared.CrossRegionCopyDeprecateRule(
                                interval=127225875950264235,
                                interval_unit="YEARS",
                            ),
                            encrypted=True,
                            retain_rule=shared.CrossRegionCopyRetainRule(
                                interval=1325682419092169393,
                                interval_unit="MONTHS",
                            ),
                            target="accusantium",
                            target_region="qui",
                        ),
                        shared.CrossRegionCopyRule(
                            cmk_arn="ea",
                            copy_tags=True,
                            deprecate_rule=shared.CrossRegionCopyDeprecateRule(
                                interval=8037355963908866572,
                                interval_unit="MONTHS",
                            ),
                            encrypted=True,
                            retain_rule=shared.CrossRegionCopyRetainRule(
                                interval=5643905309582698835,
                                interval_unit="MONTHS",
                            ),
                            target="vero",
                            target_region="quis",
                        ),
                    ],
                    deprecate_rule=shared.DeprecateRule(
                        count=3816780269387027271,
                        interval=3292878388625507251,
                        interval_unit="WEEKS",
                    ),
                    fast_restore_rule=shared.FastRestoreRule(
                        availability_zones=[
                            "vitae",
                            "nesciunt",
                            "fugit",
                        ],
                        count=2502521760373555910,
                        interval=4666865012529559949,
                        interval_unit="DAYS",
                    ),
                    name="magni",
                    retain_rule=shared.RetainRule(
                        count=5403100475415031532,
                        interval=500970383850890347,
                        interval_unit="MONTHS",
                    ),
                    share_rules=[
                        shared.ShareRule(
                            target_accounts=[
                                "qui",
                            ],
                            unshare_interval=4416889129261804116,
                            unshare_interval_unit="YEARS",
                        ),
                    ],
                    tags_to_add=[
                        shared.Tag(
                            key="doloribus",
                            value="accusantium",
                        ),
                        shared.Tag(
                            key="explicabo",
                            value="rem",
                        ),
                        shared.Tag(
                            key="corporis",
                            value="pariatur",
                        ),
                    ],
                    variable_tags=[
                        shared.Tag(
                            key="quisquam",
                            value="animi",
                        ),
                    ],
                ),
            ],
            target_tags=[
                shared.Tag(
                    key="beatae",
                    value="iste",
                ),
            ],
        ),
        state="DISABLED",
        tags={
            "corporis": "quo",
        },
    ),
)
    
res = s.create_lifecycle_policy(req)

if res.create_lifecycle_policy_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_lifecycle_policy` - Creates a policy to manage the lifecycle of the specified Amazon Web Services resources. You can create up to 100 lifecycle policies.
* `delete_lifecycle_policy` - Deletes the specified lifecycle policy and halts the automated operations that the policy specified.
* `get_lifecycle_policies` - <p>Gets summary information about all or the specified data lifecycle policies.</p> <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>
* `get_lifecycle_policy` - Gets detailed information about the specified lifecycle policy.
* `list_tags_for_resource` - Lists the tags for the specified resource.
* `tag_resource` - Adds the specified tags to the specified resource.
* `untag_resource` - Removes the specified tags from the specified resource.
* `update_lifecycle_policy` - Updates the specified lifecycle policy.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
