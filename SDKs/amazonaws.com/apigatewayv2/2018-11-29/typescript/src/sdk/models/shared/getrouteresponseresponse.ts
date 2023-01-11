import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParameterConstraints } from "./parameterconstraints";



export class GetRouteResponseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ModelSelectionExpression" })
  modelSelectionExpression?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ResponseModels" })
  responseModels?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ResponseParameters", elemType: ParameterConstraints })
  responseParameters?: Record<string, ParameterConstraints>;

  @SpeakeasyMetadata({ data: "json, name=RouteResponseId" })
  routeResponseId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=RouteResponseKey" })
  routeResponseKey?: Record<string, any>;
}
