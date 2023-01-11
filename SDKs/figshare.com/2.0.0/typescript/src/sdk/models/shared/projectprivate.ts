import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProjectPrivateRoleEnum {
    Owner = "Owner",
    Collaborator = "Collaborator",
    Viewer = "Viewer"
}

export enum ProjectPrivateStorageEnum {
    Individual = "individual",
    Group = "group"
}


export class ProjectPrivate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=published_date" })
  publishedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: ProjectPrivateRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=storage" })
  storage?: ProjectPrivateStorageEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
