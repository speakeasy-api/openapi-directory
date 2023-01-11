import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetStartExportTaskActionEnum(str, Enum):
    START_EXPORT_TASK = "StartExportTask"

class GetStartExportTaskVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclasses.dataclass
class GetStartExportTaskQueryParams:
    action: GetStartExportTaskActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    export_task_identifier: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ExportTaskIdentifier', 'style': 'form', 'explode': True }})
    iam_role_arn: str = dataclasses.field(metadata={'query_param': { 'field_name': 'IamRoleArn', 'style': 'form', 'explode': True }})
    kms_key_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'KmsKeyId', 'style': 'form', 'explode': True }})
    s3_bucket_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'S3BucketName', 'style': 'form', 'explode': True }})
    source_arn: str = dataclasses.field(metadata={'query_param': { 'field_name': 'SourceArn', 'style': 'form', 'explode': True }})
    version: GetStartExportTaskVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    export_only: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ExportOnly', 'style': 'form', 'explode': True }})
    s3_prefix: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'S3Prefix', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetStartExportTaskHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetStartExportTaskRequest:
    headers: GetStartExportTaskHeaders = dataclasses.field()
    query_params: GetStartExportTaskQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetStartExportTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
