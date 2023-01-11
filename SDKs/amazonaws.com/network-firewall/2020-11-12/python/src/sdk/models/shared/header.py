import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import statefulruledirection_enum as shared_statefulruledirection_enum
from ..shared import statefulruleprotocol_enum as shared_statefulruleprotocol_enum


@dataclass_json
@dataclasses.dataclass
class Header:
    r"""Header
    The 5-tuple criteria for AWS Network Firewall to use to inspect packet headers in stateful traffic flow inspection. Traffic flows that match the criteria are a match for the corresponding <a>StatefulRule</a>. 
    """
    
    destination: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Destination') }})
    destination_port: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationPort') }})
    direction: shared_statefulruledirection_enum.StatefulRuleDirectionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Direction') }})
    protocol: shared_statefulruleprotocol_enum.StatefulRuleProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocol') }})
    source: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Source') }})
    source_port: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourcePort') }})
    
