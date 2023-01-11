import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GroupEmbargoOptionsTypeEnum {
    LoggedIn = "logged_in",
    IpRange = "ip_range",
    Administrator = "administrator"
}


export class GroupEmbargoOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=ip_name" })
  ipName?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GroupEmbargoOptionsTypeEnum;
}
