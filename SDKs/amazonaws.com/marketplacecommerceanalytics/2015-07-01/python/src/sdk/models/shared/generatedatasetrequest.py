import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasettype_enum as shared_datasettype_enum


@dataclass_json
@dataclasses.dataclass
class GenerateDataSetRequest:
    r"""GenerateDataSetRequest
    Container for the parameters to the GenerateDataSet operation.
    """
    
    data_set_publication_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSetPublicationDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_set_type: shared_datasettype_enum.DataSetTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSetType') }})
    destination_s3_bucket_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationS3BucketName') }})
    role_name_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleNameArn') }})
    sns_topic_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('snsTopicArn') }})
    customer_defined_values: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerDefinedValues') }})
    destination_s3_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationS3Prefix') }})
    
