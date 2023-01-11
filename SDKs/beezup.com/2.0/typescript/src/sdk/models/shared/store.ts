import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StoreLinks } from "./storelinks";
import { StoreStatusEnum } from "./storestatusenum";
import { StoreUserRoleEnum } from "./storeuserroleenum";



export class Store extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countryIsoCodeAlpha3" })
  countryIsoCodeAlpha3: string;

  @SpeakeasyMetadata({ data: "json, name=creationUtcDate" })
  creationUtcDate: Date;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode: string;

  @SpeakeasyMetadata({ data: "json, name=goVersion" })
  goVersion: number;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: StoreLinks;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=offerId" })
  offerId: number;

  @SpeakeasyMetadata({ data: "json, name=offerName" })
  offerName: string;

  @SpeakeasyMetadata({ data: "json, name=ownerUserId" })
  ownerUserId: string;

  @SpeakeasyMetadata({ data: "json, name=sectors" })
  sectors: string[];

  @SpeakeasyMetadata({ data: "json, name=shareCount" })
  shareCount: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: StoreStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=storeId" })
  storeId: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=userRole" })
  userRole: StoreUserRoleEnum;
}
