import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountaggregationsource as shared_accountaggregationsource
from ..shared import organizationaggregationsource as shared_organizationaggregationsource


@dataclass_json
@dataclasses.dataclass
class ConfigurationAggregator:
    r"""ConfigurationAggregator
    The details about the configuration aggregator, including information about source accounts, regions, and metadata of the aggregator. 
    """
    
    account_aggregation_sources: Optional[list[shared_accountaggregationsource.AccountAggregationSource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountAggregationSources') }})
    configuration_aggregator_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationAggregatorArn') }})
    configuration_aggregator_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationAggregatorName') }})
    created_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedBy') }})
    creation_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdatedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    organization_aggregation_source: Optional[shared_organizationaggregationsource.OrganizationAggregationSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationAggregationSource') }})
    
