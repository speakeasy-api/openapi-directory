import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import renderingenginetype_enum as shared_renderingenginetype_enum
from ..shared import robotsoftwaresuitetype_enum as shared_robotsoftwaresuitetype_enum
from ..shared import robotsoftwaresuiteversiontype_enum as shared_robotsoftwaresuiteversiontype_enum
from ..shared import simulationsoftwaresuitetype_enum as shared_simulationsoftwaresuitetype_enum
from ..shared import sourceconfig as shared_sourceconfig
from ..shared import createsimulationapplicationresponse as shared_createsimulationapplicationresponse


@dataclasses.dataclass
class CreateSimulationApplicationHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateSimulationApplicationRequestBodyEnvironment:
    r"""CreateSimulationApplicationRequestBodyEnvironment
    The object that contains the Docker image URI for either your robot or simulation applications.
    """
    
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateSimulationApplicationRequestBodyRenderingEngine:
    r"""CreateSimulationApplicationRequestBodyRenderingEngine
    Information about a rendering engine.
    """
    
    name: Optional[shared_renderingenginetype_enum.RenderingEngineTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateSimulationApplicationRequestBodyRobotSoftwareSuite:
    r"""CreateSimulationApplicationRequestBodyRobotSoftwareSuite
    Information about a robot software suite (ROS distribution).
    """
    
    name: Optional[shared_robotsoftwaresuitetype_enum.RobotSoftwareSuiteTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    version: Optional[shared_robotsoftwaresuiteversiontype_enum.RobotSoftwareSuiteVersionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateSimulationApplicationRequestBodySimulationSoftwareSuite:
    r"""CreateSimulationApplicationRequestBodySimulationSoftwareSuite
    Information about a simulation software suite.
    """
    
    name: Optional[shared_simulationsoftwaresuitetype_enum.SimulationSoftwareSuiteTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateSimulationApplicationRequestBody:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    robot_software_suite: CreateSimulationApplicationRequestBodyRobotSoftwareSuite = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('robotSoftwareSuite') }})
    simulation_software_suite: CreateSimulationApplicationRequestBodySimulationSoftwareSuite = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('simulationSoftwareSuite') }})
    environment: Optional[CreateSimulationApplicationRequestBodyEnvironment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    rendering_engine: Optional[CreateSimulationApplicationRequestBodyRenderingEngine] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renderingEngine') }})
    sources: Optional[list[shared_sourceconfig.SourceConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclasses.dataclass
class CreateSimulationApplicationRequest:
    headers: CreateSimulationApplicationHeaders = dataclasses.field()
    request: CreateSimulationApplicationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateSimulationApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_simulation_application_response: Optional[shared_createsimulationapplicationresponse.CreateSimulationApplicationResponse] = dataclasses.field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
