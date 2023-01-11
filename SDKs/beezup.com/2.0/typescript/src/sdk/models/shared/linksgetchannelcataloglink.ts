import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonInfoSummaries } from "./beezupcommoninfosummaries";
import { BeezUpCommonHttpMethodEnum } from "./beezupcommonhttpmethodenum";
import { BeezUpCommonLinkParameter3 } from "./beezupcommonlinkparameter3";



export class LinksGetChannelCatalogLink extends SpeakeasyBase {
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
  info?: BeezUpCommonInfoSummaries;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: BeezUpCommonHttpMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=operationId" })
  operationId?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: BeezUpCommonLinkParameter3 })
  parameters?: Record<string, BeezUpCommonLinkParameter3>;

  @SpeakeasyMetadata({ data: "json, name=urlTemplated" })
  urlTemplated?: boolean;
}
