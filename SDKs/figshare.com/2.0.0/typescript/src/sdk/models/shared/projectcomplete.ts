import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Collaborator } from "./collaborator";
import { FundingInformation } from "./fundinginformation";



export class ProjectComplete extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collaborators", elemType: Collaborator })
  collaborators?: Collaborator[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=figshare_url" })
  figshareUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=funding" })
  funding?: string;

  @SpeakeasyMetadata({ data: "json, name=funding_list", elemType: FundingInformation })
  fundingList?: FundingInformation[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=published_date" })
  publishedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
