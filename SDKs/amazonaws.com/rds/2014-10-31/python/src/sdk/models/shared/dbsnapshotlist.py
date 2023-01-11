import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import processorfeaturelist as shared_processorfeaturelist
from ..shared import taglist as shared_taglist


@dataclasses.dataclass
class DbSnapshotList:
    r"""DbSnapshotList
    <p>Contains the details of an Amazon RDS DB snapshot. </p> <p>This data type is used as a response element in the <code>DescribeDBSnapshots</code> action. </p>
    """
    
    allocated_storage: Optional[int] = dataclasses.field(default=None)
    availability_zone: Optional[str] = dataclasses.field(default=None)
    db_instance_identifier: Optional[str] = dataclasses.field(default=None)
    db_snapshot_arn: Optional[str] = dataclasses.field(default=None)
    db_snapshot_identifier: Optional[str] = dataclasses.field(default=None)
    dbi_resource_id: Optional[str] = dataclasses.field(default=None)
    encrypted: Optional[bool] = dataclasses.field(default=None)
    engine: Optional[str] = dataclasses.field(default=None)
    engine_version: Optional[str] = dataclasses.field(default=None)
    iam_database_authentication_enabled: Optional[bool] = dataclasses.field(default=None)
    instance_create_time: Optional[datetime] = dataclasses.field(default=None)
    iops: Optional[int] = dataclasses.field(default=None)
    kms_key_id: Optional[str] = dataclasses.field(default=None)
    license_model: Optional[str] = dataclasses.field(default=None)
    master_username: Optional[str] = dataclasses.field(default=None)
    option_group_name: Optional[str] = dataclasses.field(default=None)
    original_snapshot_create_time: Optional[datetime] = dataclasses.field(default=None)
    percent_progress: Optional[int] = dataclasses.field(default=None)
    port: Optional[int] = dataclasses.field(default=None)
    processor_features: Optional[list[shared_processorfeaturelist.ProcessorFeatureList]] = dataclasses.field(default=None)
    snapshot_create_time: Optional[datetime] = dataclasses.field(default=None)
    snapshot_type: Optional[str] = dataclasses.field(default=None)
    source_db_snapshot_identifier: Optional[str] = dataclasses.field(default=None)
    source_region: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    storage_type: Optional[str] = dataclasses.field(default=None)
    tag_list: Optional[list[shared_taglist.TagList]] = dataclasses.field(default=None)
    tde_credential_arn: Optional[str] = dataclasses.field(default=None)
    timezone: Optional[str] = dataclasses.field(default=None)
    vpc_id: Optional[str] = dataclasses.field(default=None)
    
