import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis:
    r"""StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis
    Information about the network insights analysis.
    """
    
    alternate_path_hints: Optional[dict[str, Any]] = dataclasses.field(default=None)
    explanations: Optional[dict[str, Any]] = dataclasses.field(default=None)
    filter_in_arns: Optional[dict[str, Any]] = dataclasses.field(default=None)
    forward_path_components: Optional[dict[str, Any]] = dataclasses.field(default=None)
    network_insights_analysis_arn: Optional[dict[str, Any]] = dataclasses.field(default=None)
    network_insights_analysis_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    network_insights_path_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    network_path_found: Optional[dict[str, Any]] = dataclasses.field(default=None)
    return_path_components: Optional[dict[str, Any]] = dataclasses.field(default=None)
    start_date: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status_message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class StartNetworkInsightsAnalysisResult:
    network_insights_analysis: Optional[StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis] = dataclasses.field(default=None)
    
