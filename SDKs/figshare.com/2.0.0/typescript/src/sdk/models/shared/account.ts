import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Account extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: number;

  @SpeakeasyMetadata({ data: "json, name=created_date" })
  createdDate?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=group_id" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=institution_id" })
  institutionId?: number;

  @SpeakeasyMetadata({ data: "json, name=institution_user_id" })
  institutionUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=maximum_file_size" })
  maximumFileSize?: number;

  @SpeakeasyMetadata({ data: "json, name=modified_date" })
  modifiedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=pending_quota_request" })
  pendingQuotaRequest?: boolean;

  @SpeakeasyMetadata({ data: "json, name=quota" })
  quota?: number;

  @SpeakeasyMetadata({ data: "json, name=used_quota" })
  usedQuota?: number;

  @SpeakeasyMetadata({ data: "json, name=used_quota_private" })
  usedQuotaPrivate?: number;

  @SpeakeasyMetadata({ data: "json, name=used_quota_public" })
  usedQuotaPublic?: number;
}
