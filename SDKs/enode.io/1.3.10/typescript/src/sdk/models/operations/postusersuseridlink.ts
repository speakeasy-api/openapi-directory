import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostUsersUseridLinkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}

export enum PostUsersUseridLinkRequestBodyVendorEnum {
    Tesla = "TESLA",
    Bmw = "BMW",
    Audi = "AUDI",
    Volkswagen = "VOLKSWAGEN",
    Hyundai = "HYUNDAI",
    Peugeot = "PEUGEOT",
    Nissan = "NISSAN"
}


export class PostUsersUseridLinkRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=forceLanguage" })
  forceLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=linkMultiple" })
  linkMultiple?: boolean;

  @SpeakeasyMetadata({ data: "json, name=userImage" })
  userImage?: string;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName?: string;

  @SpeakeasyMetadata({ data: "json, name=vendor" })
  vendor?: PostUsersUseridLinkRequestBodyVendorEnum;
}


export class PostUsersUseridLinkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  clientAccessToken: shared.SchemeClientAccessToken;
}


export class PostUsersUseridLink200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=linkState" })
  linkState?: string;
}


export class PostUsersUseridLinkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostUsersUseridLinkPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostUsersUseridLinkRequestBody;

  @SpeakeasyMetadata()
  security: PostUsersUseridLinkSecurity;
}


export class PostUsersUseridLinkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postUsersUseridLink200ApplicationJSONObject?: PostUsersUseridLink200ApplicationJson;
}
