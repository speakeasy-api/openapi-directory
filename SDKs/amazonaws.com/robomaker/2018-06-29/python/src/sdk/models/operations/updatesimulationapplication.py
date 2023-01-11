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
from ..shared import updatesimulationapplicationresponse as shared_updatesimulationapplicationresponse


@dataclasses.dataclass
class UpdateSimulationApplicationHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSimulationApplicationRequestBodyEnvironment:
    r"""UpdateSimulationApplicationRequestBodyEnvironment
    The object that contains the Docker image URI for either your robot or simulation applications.
    """
    
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSimulationApplicationRequestBodyRenderingEngine:
    r"""UpdateSimulationApplicationRequestBodyRenderingEngine
    Information about a rendering engine.
    """
    
    name: Optional[shared_renderingenginetype_enum.RenderingEngineTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSimulationApplicationRequestBodyRobotSoftwareSuite:
    r"""UpdateSimulationApplicationRequestBodyRobotSoftwareSuite
    Information about a robot software suite (ROS distribution).
    """
    
    name: Optional[shared_robotsoftwaresuitetype_enum.RobotSoftwareSuiteTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    version: Optional[shared_robotsoftwaresuiteversiontype_enum.RobotSoftwareSuiteVersionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSimulationApplicationRequestBodySimulationSoftwareSuite:
    r"""UpdateSimulationApplicationRequestBodySimulationSoftwareSuite
    Information about a simulation software suite.
    """
    
    name: Optional[shared_simulationsoftwaresuitetype_enum.SimulationSoftwareSuiteTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSimulationApplicationRequestBody:
    application: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('application') }})
    robot_software_suite: UpdateSimulationApplicationRequestBodyRobotSoftwareSuite = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('robotSoftwareSuite') }})
    simulation_software_suite: UpdateSimulationApplicationRequestBodySimulationSoftwareSuite = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('simulationSoftwareSuite') }})
    current_revision_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentRevisionId') }})
    environment: Optional[UpdateSimulationApplicationRequestBodyEnvironment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    rendering_engine: Optional[UpdateSimulationApplicationRequestBodyRenderingEngine] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renderingEngine') }})
    sources: Optional[list[shared_sourceconfig.SourceConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    

@dataclasses.dataclass
class UpdateSimulationApplicationRequest:
    headers: UpdateSimulationApplicationHeaders = dataclasses.field()
    request: UpdateSimulationApplicationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateSimulationApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    update_simulation_application_response: Optional[shared_updatesimulationapplicationresponse.UpdateSimulationApplicationResponse] = dataclasses.field(default=None)
    
