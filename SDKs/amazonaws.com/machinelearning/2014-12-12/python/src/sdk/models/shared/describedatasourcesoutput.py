import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasource as shared_datasource


@dataclass_json
@dataclasses.dataclass
class DescribeDataSourcesOutput:
    r"""DescribeDataSourcesOutput
    Represents the query results from a <a>DescribeDataSources</a> operation. The content is essentially a list of <code>DataSource</code>.
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    results: Optional[list[shared_datasource.DataSource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Results') }})
    
