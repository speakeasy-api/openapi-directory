import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CurationCommentTypeEnum {
    Comment = "comment",
    Approved = "approved",
    Rejected = "rejected",
    Closed = "closed"
}


export class CurationComment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CurationCommentTypeEnum;
}
