import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import elasticsearchdestinationdescription as shared_elasticsearchdestinationdescription
from ..shared import extendeds3destinationdescription as shared_extendeds3destinationdescription
from ..shared import httpendpointdestinationdescription as shared_httpendpointdestinationdescription
from ..shared import redshiftdestinationdescription as shared_redshiftdestinationdescription
from ..shared import s3destinationdescription as shared_s3destinationdescription
from ..shared import splunkdestinationdescription as shared_splunkdestinationdescription


@dataclass_json
@dataclasses.dataclass
class DestinationDescription:
    r"""DestinationDescription
    Describes the destination for a delivery stream.
    """
    
    destination_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationId') }})
    elasticsearch_destination_description: Optional[shared_elasticsearchdestinationdescription.ElasticsearchDestinationDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElasticsearchDestinationDescription') }})
    extended_s3_destination_description: Optional[shared_extendeds3destinationdescription.ExtendedS3DestinationDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtendedS3DestinationDescription') }})
    http_endpoint_destination_description: Optional[shared_httpendpointdestinationdescription.HTTPEndpointDestinationDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HttpEndpointDestinationDescription') }})
    redshift_destination_description: Optional[shared_redshiftdestinationdescription.RedshiftDestinationDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedshiftDestinationDescription') }})
    s3_destination_description: Optional[shared_s3destinationdescription.S3DestinationDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3DestinationDescription') }})
    splunk_destination_description: Optional[shared_splunkdestinationdescription.SplunkDestinationDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SplunkDestinationDescription') }})
    
