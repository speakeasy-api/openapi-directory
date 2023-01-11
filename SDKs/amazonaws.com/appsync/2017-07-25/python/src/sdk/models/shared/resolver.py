import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cachingconfig as shared_cachingconfig
from ..shared import resolverkind_enum as shared_resolverkind_enum
from ..shared import pipelineconfig as shared_pipelineconfig
from ..shared import syncconfig as shared_syncconfig


@dataclass_json
@dataclasses.dataclass
class Resolver:
    r"""Resolver
    Describes a resolver.
    """
    
    caching_config: Optional[shared_cachingconfig.CachingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cachingConfig') }})
    data_source_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceName') }})
    field_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldName') }})
    kind: Optional[shared_resolverkind_enum.ResolverKindEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    pipeline_config: Optional[shared_pipelineconfig.PipelineConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineConfig') }})
    request_mapping_template: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMappingTemplate') }})
    resolver_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolverArn') }})
    response_mapping_template: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseMappingTemplate') }})
    sync_config: Optional[shared_syncconfig.SyncConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncConfig') }})
    type_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeName') }})
    
