import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExclusionFilter } from "./exclusionfilter";
import { ExclusionFiltersResponseLinks } from "./exclusionfiltersresponselinks";



export class ExclusionFiltersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exclusionFilters", elemType: ExclusionFilter })
  exclusionFilters?: ExclusionFilter[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: ExclusionFiltersResponseLinks;
}
