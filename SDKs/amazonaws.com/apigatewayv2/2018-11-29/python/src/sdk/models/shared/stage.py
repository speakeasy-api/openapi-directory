"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import routesettings as shared_routesettings
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from enum import Enum
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class StageAccessLogSettings:
    r"""Settings for logging access in this stage."""
    
    destination_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('DestinationArn'), 'exclude': lambda f: f is None }})  
    format: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Format'), 'exclude': lambda f: f is None }})  
    
class StageDefaultRouteSettingsLoggingLevelEnum(str, Enum):
    r"""Specifies the logging level for this route: INFO, ERROR, or OFF. This property affects the log entries pushed to Amazon CloudWatch Logs. Supported only for WebSocket APIs."""
    ERROR = 'ERROR'
    INFO = 'INFO'
    OFF = 'OFF'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class StageDefaultRouteSettings:
    r"""Default route settings for the stage."""
    
    data_trace_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('DataTraceEnabled'), 'exclude': lambda f: f is None }})  
    detailed_metrics_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('DetailedMetricsEnabled'), 'exclude': lambda f: f is None }})  
    logging_level: Optional[StageDefaultRouteSettingsLoggingLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('LoggingLevel'), 'exclude': lambda f: f is None }})  
    throttling_burst_limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ThrottlingBurstLimit'), 'exclude': lambda f: f is None }})  
    throttling_rate_limit: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ThrottlingRateLimit'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Stage:
    r"""Represents an API stage."""
    
    stage_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('StageName') }})  
    access_log_settings: Optional[StageAccessLogSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('AccessLogSettings'), 'exclude': lambda f: f is None }})  
    api_gateway_managed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ApiGatewayManaged'), 'exclude': lambda f: f is None }})  
    auto_deploy: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('AutoDeploy'), 'exclude': lambda f: f is None }})  
    client_certificate_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ClientCertificateId'), 'exclude': lambda f: f is None }})  
    created_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('CreatedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})  
    default_route_settings: Optional[StageDefaultRouteSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('DefaultRouteSettings'), 'exclude': lambda f: f is None }})  
    deployment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('DeploymentId'), 'exclude': lambda f: f is None }})  
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Description'), 'exclude': lambda f: f is None }})  
    last_deployment_status_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('LastDeploymentStatusMessage'), 'exclude': lambda f: f is None }})  
    last_updated_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('LastUpdatedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})  
    route_settings: Optional[dict[str, shared_routesettings.RouteSettings]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('RouteSettings'), 'exclude': lambda f: f is None }})  
    stage_variables: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('StageVariables'), 'exclude': lambda f: f is None }})  
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Tags'), 'exclude': lambda f: f is None }})  
    