import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParameterConstraints } from "./parameterconstraints";



export class CreateRouteResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApiGatewayManaged" })
  apiGatewayManaged?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ApiKeyRequired" })
  apiKeyRequired?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=AuthorizationScopes" })
  authorizationScopes?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=AuthorizationType" })
  authorizationType?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=AuthorizerId" })
  authorizerId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ModelSelectionExpression" })
  modelSelectionExpression?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=OperationName" })
  operationName?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=RequestModels" })
  requestModels?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=RequestParameters", elemType: ParameterConstraints })
  requestParameters?: Record<string, ParameterConstraints>;

  @SpeakeasyMetadata({ data: "json, name=RouteId" })
  routeId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=RouteKey" })
  routeKey?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=RouteResponseSelectionExpression" })
  routeResponseSelectionExpression?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Target" })
  target?: Record<string, any>;
}
