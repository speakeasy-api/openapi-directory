import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import catalogtarget as shared_catalogtarget
from ..shared import dynamodbtarget as shared_dynamodbtarget
from ..shared import jdbctarget as shared_jdbctarget
from ..shared import mongodbtarget as shared_mongodbtarget
from ..shared import s3target as shared_s3target


@dataclass_json
@dataclasses.dataclass
class CrawlerTargets:
    r"""CrawlerTargets
    Specifies data stores to crawl.
    """
    
    catalog_targets: Optional[list[shared_catalogtarget.CatalogTarget]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogTargets') }})
    dynamo_db_targets: Optional[list[shared_dynamodbtarget.DynamoDbTarget]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DynamoDBTargets') }})
    jdbc_targets: Optional[list[shared_jdbctarget.JdbcTarget]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JdbcTargets') }})
    mongo_db_targets: Optional[list[shared_mongodbtarget.MongoDbTarget]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MongoDBTargets') }})
    s3_targets: Optional[list[shared_s3target.S3Target]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Targets') }})
    
