import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AccountReportStatusEnum {
    Missing = "missing",
    Pending = "pending",
    Done = "done"
}


export class AccountReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: number;

  @SpeakeasyMetadata({ data: "json, name=created_date" })
  createdDate?: string;

  @SpeakeasyMetadata({ data: "json, name=download_url" })
  downloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=group_id" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AccountReportStatusEnum;
}
