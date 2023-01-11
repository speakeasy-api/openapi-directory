import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codesigningpolicy_enum as shared_codesigningpolicy_enum
from ..shared import updatecodesigningconfigresponse as shared_updatecodesigningconfigresponse


@dataclasses.dataclass
class UpdateCodeSigningConfigPathParams:
    code_signing_config_arn: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CodeSigningConfigArn', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateCodeSigningConfigHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateCodeSigningConfigRequestBodyAllowedPublishers:
    r"""UpdateCodeSigningConfigRequestBodyAllowedPublishers
    List of signing profiles that can sign a code package. 
    """
    
    signing_profile_version_arns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SigningProfileVersionArns') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateCodeSigningConfigRequestBodyCodeSigningPolicies:
    r"""UpdateCodeSigningConfigRequestBodyCodeSigningPolicies
    Code signing configuration <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies\">policies</a> specify the validation failure action for signature mismatch or expiry.
    """
    
    untrusted_artifact_on_deployment: Optional[shared_codesigningpolicy_enum.CodeSigningPolicyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UntrustedArtifactOnDeployment') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateCodeSigningConfigRequestBody:
    allowed_publishers: Optional[UpdateCodeSigningConfigRequestBodyAllowedPublishers] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedPublishers') }})
    code_signing_policies: Optional[UpdateCodeSigningConfigRequestBodyCodeSigningPolicies] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeSigningPolicies') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    

@dataclasses.dataclass
class UpdateCodeSigningConfigRequest:
    headers: UpdateCodeSigningConfigHeaders = dataclasses.field()
    path_params: UpdateCodeSigningConfigPathParams = dataclasses.field()
    request: UpdateCodeSigningConfigRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateCodeSigningConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_exception: Optional[Any] = dataclasses.field(default=None)
    update_code_signing_config_response: Optional[shared_updatecodesigningconfigresponse.UpdateCodeSigningConfigResponse] = dataclasses.field(default=None)
    
