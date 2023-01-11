import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceCollaborator } from "./resourcecollaborator";
import { CollectionPrivacyEnum } from "./collectionprivacyenum";
import { ResourceRights } from "./resourcerights";
import { CollectionTypeEnum } from "./collectiontypeenum";
import { UserPublicSummary } from "./userpublicsummary";



// CollectionCapabilities
/** 
 * Capabilities the current user has on this collection. Each capability corresponds to a fine-grained action that a user may take.
**/
export class CollectionCapabilities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canAddScores" })
  canAddScores?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canDelete" })
  canDelete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canDeleteScores" })
  canDeleteScores?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canEdit" })
  canEdit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canShare" })
  canShare?: boolean;
}


// Collection
/** 
 * Collection of scores
**/
export class Collection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=app" })
  app?: string;

  @SpeakeasyMetadata({ data: "json, name=capabilities" })
  capabilities?: CollectionCapabilities;

  @SpeakeasyMetadata({ data: "json, name=collaborators", elemType: ResourceCollaborator })
  collaborators?: ResourceCollaborator[];

  @SpeakeasyMetadata({ data: "json, name=collections" })
  collections?: string[];

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=htmlUrl" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: CollectionPrivacyEnum;

  @SpeakeasyMetadata({ data: "json, name=rights" })
  rights?: ResourceRights;

  @SpeakeasyMetadata({ data: "json, name=sharingKey" })
  sharingKey?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CollectionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: UserPublicSummary;
}
