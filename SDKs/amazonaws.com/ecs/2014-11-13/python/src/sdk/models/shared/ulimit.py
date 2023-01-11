import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ulimitname_enum as shared_ulimitname_enum


@dataclass_json
@dataclasses.dataclass
class Ulimit:
    r"""Ulimit
    <p>The <code>ulimit</code> settings to pass to the container.</p> <p>Amazon ECS tasks hosted on Fargate use the default resource limit values set by the operating system with the exception of the <code>nofile</code> resource limit parameter which Fargate overrides. The <code>nofile</code> resource limit sets a restriction on the number of open files that a container can use. The default <code>nofile</code> soft limit is <code>1024</code> and hard limit is <code>4096</code>.</p>
    """
    
    hard_limit: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hardLimit') }})
    name: shared_ulimitname_enum.UlimitNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    soft_limit: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('softLimit') }})
    
