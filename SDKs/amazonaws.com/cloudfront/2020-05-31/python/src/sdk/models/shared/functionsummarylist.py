import dataclasses
from typing import Optional
from ..shared import functionconfig as shared_functionconfig
from ..shared import functionmetadata as shared_functionmetadata


@dataclasses.dataclass
class FunctionSummaryList:
    r"""FunctionSummaryList
    Contains configuration information and metadata about a CloudFront function.
    """
    
    function_config: shared_functionconfig.FunctionConfig = dataclasses.field()
    function_metadata: shared_functionmetadata.FunctionMetadata = dataclasses.field()
    name: str = dataclasses.field()
    status: Optional[str] = dataclasses.field(default=None)
    
