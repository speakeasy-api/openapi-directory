<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AddInstanceFleetRequest(
    add_instance_fleet_input=shared.AddInstanceFleetInput(
        cluster_id="corrupti",
        instance_fleet=shared.InstanceFleetConfig(
            instance_fleet_type="CORE",
            instance_type_configs=[
                shared.InstanceTypeConfig(
                    bid_price="quibusdam",
                    bid_price_as_percentage_of_on_demand_price=6027.63,
                    configurations=[
                        shared.Configuration(
                            classification="corrupti",
                            configurations=[
                                shared.Configuration(),
                                shared.Configuration(),
                                shared.Configuration(),
                                shared.Configuration(),
                            ],
                            properties={
                                "error": "deserunt",
                                "suscipit": "iure",
                            },
                        ),
                        shared.Configuration(
                            classification="magnam",
                            configurations=[
                                shared.Configuration(),
                                shared.Configuration(),
                                shared.Configuration(),
                                shared.Configuration(),
                            ],
                            properties={
                                "delectus": "tempora",
                            },
                        ),
                        shared.Configuration(
                            classification="suscipit",
                            configurations=[
                                shared.Configuration(),
                                shared.Configuration(),
                            ],
                            properties={
                                "placeat": "voluptatum",
                                "iusto": "excepturi",
                                "nisi": "recusandae",
                                "temporibus": "ab",
                            },
                        ),
                        shared.Configuration(
                            classification="quis",
                            configurations=[
                                shared.Configuration(),
                            ],
                            properties={
                                "perferendis": "ipsam",
                                "repellendus": "sapiente",
                                "quo": "odit",
                            },
                        ),
                    ],
                    custom_ami_id="at",
                    ebs_configuration=shared.EbsConfiguration(
                        ebs_block_device_configs=[
                            shared.EbsBlockDeviceConfig(
                                volume_specification=shared.VolumeSpecification(
                                    iops=978619,
                                    size_in_gb=473608,
                                    throughput=799159,
                                    volume_type="quod",
                                ),
                                volumes_per_instance=461479,
                            ),
                            shared.EbsBlockDeviceConfig(
                                volume_specification=shared.VolumeSpecification(
                                    iops=520478,
                                    size_in_gb=780529,
                                    throughput=678880,
                                    volume_type="dicta",
                                ),
                                volumes_per_instance=720633,
                            ),
                            shared.EbsBlockDeviceConfig(
                                volume_specification=shared.VolumeSpecification(
                                    iops=639921,
                                    size_in_gb=582020,
                                    throughput=143353,
                                    volume_type="deleniti",
                                ),
                                volumes_per_instance=944669,
                            ),
                            shared.EbsBlockDeviceConfig(
                                volume_specification=shared.VolumeSpecification(
                                    iops=758616,
                                    size_in_gb=521848,
                                    throughput=105907,
                                    volume_type="commodi",
                                ),
                                volumes_per_instance=473600,
                            ),
                        ],
                        ebs_optimized=False,
                    ),
                    instance_type="modi",
                    weighted_capacity=186332,
                ),
                shared.InstanceTypeConfig(
                    bid_price="impedit",
                    bid_price_as_percentage_of_on_demand_price=7369.18,
                    configurations=[
                        shared.Configuration(
                            classification="ipsum",
                            configurations=[
                                shared.Configuration(),
                                shared.Configuration(),
                                shared.Configuration(),
                            ],
                            properties={
                                "perferendis": "ad",
                            },
                        ),
                        shared.Configuration(
                            classification="natus",
                            configurations=[
                                shared.Configuration(),
                            ],
                            properties={
                                "dolor": "natus",
                                "laboriosam": "hic",
                                "saepe": "fuga",
                            },
                        ),
                    ],
                    custom_ami_id="in",
                    ebs_configuration=shared.EbsConfiguration(
                        ebs_block_device_configs=[
                            shared.EbsBlockDeviceConfig(
                                volume_specification=shared.VolumeSpecification(
                                    iops=613064,
                                    size_in_gb=437032,
                                    throughput=902349,
                                    volume_type="quidem",
                                ),
                                volumes_per_instance=99280,
                            ),
                            shared.EbsBlockDeviceConfig(
                                volume_specification=shared.VolumeSpecification(
                                    iops=60225,
                                    size_in_gb=969810,
                                    throughput=666767,
                                    volume_type="mollitia",
                                ),
                                volumes_per_instance=670638,
                            ),
                        ],
                        ebs_optimized=False,
                    ),
                    instance_type="dolores",
                    weighted_capacity=210382,
                ),
                shared.InstanceTypeConfig(
                    bid_price="corporis",
                    bid_price_as_percentage_of_on_demand_price=1289.26,
                    configurations=[
                        shared.Configuration(
                            classification="enim",
                            configurations=[
                                shared.Configuration(),
                                shared.Configuration(),
                                shared.Configuration(),
                            ],
                            properties={
                                "minima": "excepturi",
                                "accusantium": "iure",
                            },
                        ),
                        shared.Configuration(
                            classification="culpa",
                            configurations=[
                                shared.Configuration(),
                                shared.Configuration(),
                                shared.Configuration(),
                                shared.Configuration(),
                            ],
                            properties={
                                "architecto": "mollitia",
                                "dolorem": "culpa",
                                "consequuntur": "repellat",
                                "mollitia": "occaecati",
                            },
                        ),
                        shared.Configuration(
                            classification="numquam",
                            configurations=[
                                shared.Configuration(),
                                shared.Configuration(),
                            ],
                            properties={
                                "molestiae": "velit",
                                "error": "quia",
                            },
                        ),
                        shared.Configuration(
                            classification="quis",
                            configurations=[
                                shared.Configuration(),
                            ],
                            properties={
                                "animi": "enim",
                                "odit": "quo",
                                "sequi": "tenetur",
                            },
                        ),
                    ],
                    custom_ami_id="ipsam",
                    ebs_configuration=shared.EbsConfiguration(
                        ebs_block_device_configs=[
                            shared.EbsBlockDeviceConfig(
                                volume_specification=shared.VolumeSpecification(
                                    iops=820994,
                                    size_in_gb=13571,
                                    throughput=97101,
                                    volume_type="error",
                                ),
                                volumes_per_instance=837945,
                            ),
                            shared.EbsBlockDeviceConfig(
                                volume_specification=shared.VolumeSpecification(
                                    iops=673660,
                                    size_in_gb=96098,
                                    throughput=971945,
                                    volume_type="voluptatibus",
                                ),
                                volumes_per_instance=878194,
                            ),
                            shared.EbsBlockDeviceConfig(
                                volume_specification=shared.VolumeSpecification(
                                    iops=468651,
                                    size_in_gb=509624,
                                    throughput=976762,
                                    volume_type="ipsa",
                                ),
                                volumes_per_instance=604846,
                            ),
                        ],
                        ebs_optimized=False,
                    ),
                    instance_type="voluptate",
                    weighted_capacity=739264,
                ),
            ],
            launch_specifications=shared.InstanceFleetProvisioningSpecifications(
                on_demand_specification=shared.OnDemandProvisioningSpecification(
                    allocation_strategy="lowest-price",
                    capacity_reservation_options=shared.OnDemandCapacityReservationOptions(
                        capacity_reservation_preference="open",
                        capacity_reservation_resource_group_arn="doloremque",
                        usage_strategy="use-capacity-reservations-first",
                    ),
                ),
                spot_specification=shared.SpotProvisioningSpecification(
                    allocation_strategy="capacity-optimized",
                    block_duration_minutes=441711,
                    timeout_action="SWITCH_TO_ON_DEMAND",
                    timeout_duration_minutes=979587,
                ),
            ),
            name="dicta",
            resize_specifications=shared.InstanceFleetResizingSpecifications(
                on_demand_resize_specification=shared.OnDemandResizingSpecification(
                    timeout_duration_minutes=359444,
                ),
                spot_resize_specification=shared.SpotResizingSpecification(
                    timeout_duration_minutes=296140,
                ),
            ),
            target_on_demand_capacity=480894,
            target_spot_capacity=118727,
        ),
    ),
    x_amz_algorithm="harum",
    x_amz_content_sha256="enim",
    x_amz_credential="accusamus",
    x_amz_date="commodi",
    x_amz_security_token="repudiandae",
    x_amz_signature="quae",
    x_amz_signed_headers="ipsum",
    x_amz_target="ElasticMapReduce.AddInstanceFleet",
)
    
res = s.add_instance_fleet(req)

if res.add_instance_fleet_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->