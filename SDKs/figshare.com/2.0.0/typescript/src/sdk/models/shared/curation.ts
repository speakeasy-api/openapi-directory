import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CurationStatusEnum {
    Pending = "pending",
    Approved = "approved",
    Rejected = "rejected",
    Closed = "closed"
}


export class Curation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: number;

  @SpeakeasyMetadata({ data: "json, name=article_id" })
  articleId?: number;

  @SpeakeasyMetadata({ data: "json, name=assigned_to" })
  assignedTo?: number;

  @SpeakeasyMetadata({ data: "json, name=comments_count" })
  commentsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=created_date" })
  createdDate?: string;

  @SpeakeasyMetadata({ data: "json, name=group_id" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=modified_date" })
  modifiedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=review_date" })
  reviewDate?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CurationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
