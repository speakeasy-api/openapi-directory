import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Collaborator } from "./collaborator";
import { FundingInformation } from "./fundinginformation";


export enum ProjectCompletePrivateRoleEnum {
    Owner = "Owner",
    Collaborator = "Collaborator",
    Viewer = "Viewer"
}

export enum ProjectCompletePrivateStorageEnum {
    Individual = "individual",
    Group = "group"
}


export class ProjectCompletePrivate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collaborators", elemType: Collaborator })
  collaborators?: Collaborator[];

  @SpeakeasyMetadata({ data: "json, name=created_date" })
  createdDate?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=figshare_url" })
  figshareUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=funding" })
  funding?: string;

  @SpeakeasyMetadata({ data: "json, name=funding_list", elemType: FundingInformation })
  fundingList?: FundingInformation[];

  @SpeakeasyMetadata({ data: "json, name=group_id" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=modified_date" })
  modifiedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=published_date" })
  publishedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=quota" })
  quota?: number;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: ProjectCompletePrivateRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=storage" })
  storage?: ProjectCompletePrivateStorageEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=used_quota" })
  usedQuota?: number;

  @SpeakeasyMetadata({ data: "json, name=used_quota_private" })
  usedQuotaPrivate?: number;

  @SpeakeasyMetadata({ data: "json, name=used_quota_public" })
  usedQuotaPublic?: number;
}
