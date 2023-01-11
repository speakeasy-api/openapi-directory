import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InfoSummaries } from "./infosummaries";
import { HttpMethodEnum } from "./httpmethodenum";
import { LinkParameter3 } from "./linkparameter3";



export class Link3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allOptionalParamsProvided" })
  allOptionalParamsProvided?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allRequiredParamsProvided" })
  allRequiredParamsProvided?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=docUrl" })
  docUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;

  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: InfoSummaries;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: HttpMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=operationId" })
  operationId?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: LinkParameter3 })
  parameters?: Record<string, LinkParameter3>;

  @SpeakeasyMetadata({ data: "json, name=rel" })
  rel?: string;

  @SpeakeasyMetadata({ data: "json, name=urlTemplated" })
  urlTemplated?: boolean;
}
