import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ElasticsearchAction:
    r"""ElasticsearchAction
    <p>Describes an action that writes data to an Amazon Elasticsearch Service domain.</p> <note> <p>This action is deprecated. Use the <a href=\"https://docs.aws.amazon.com/iot/latest/apireference/API_OpenSearchAction.html\">OpenSearch action</a> instead.</p> </note>
    """
    
    endpoint: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    index: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
