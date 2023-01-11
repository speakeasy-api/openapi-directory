import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class CreateNetworkInsightsPathResultNetworkInsightsPath:
    r"""CreateNetworkInsightsPathResultNetworkInsightsPath
    Information about the path.
    """
    
    created_date: Optional[dict[str, Any]] = dataclasses.field(default=None)
    destination: Optional[dict[str, Any]] = dataclasses.field(default=None)
    destination_ip: Optional[dict[str, Any]] = dataclasses.field(default=None)
    destination_port: Optional[dict[str, Any]] = dataclasses.field(default=None)
    network_insights_path_arn: Optional[dict[str, Any]] = dataclasses.field(default=None)
    network_insights_path_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    protocol: Optional[dict[str, Any]] = dataclasses.field(default=None)
    source: Optional[dict[str, Any]] = dataclasses.field(default=None)
    source_ip: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateNetworkInsightsPathResult:
    network_insights_path: Optional[CreateNetworkInsightsPathResultNetworkInsightsPath] = dataclasses.field(default=None)
    
