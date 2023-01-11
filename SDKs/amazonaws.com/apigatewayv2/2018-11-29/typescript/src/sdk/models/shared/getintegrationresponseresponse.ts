import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetIntegrationResponseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContentHandlingStrategy" })
  contentHandlingStrategy?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=IntegrationResponseId" })
  integrationResponseId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=IntegrationResponseKey" })
  integrationResponseKey?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ResponseParameters" })
  responseParameters?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ResponseTemplates" })
  responseTemplates?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=TemplateSelectionExpression" })
  templateSelectionExpression?: Record<string, any>;
}
