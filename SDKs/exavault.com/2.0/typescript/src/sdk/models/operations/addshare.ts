import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddShareHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class AddShareAddShareRequestBodyRecipients extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export enum AddShareAddShareRequestBodyTypeEnum {
    SharedFolder = "shared_folder",
    Receive = "receive",
    Send = "send"
}


export class AddShareAddShareRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessMode" })
  accessMode?: shared.AccessMode;

  @SpeakeasyMetadata({ data: "json, name=embed" })
  embed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expiration" })
  expiration?: Date;

  @SpeakeasyMetadata({ data: "json, name=fileDropCreateFolders" })
  fileDropCreateFolders?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hasNotification" })
  hasNotification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isPublic" })
  isPublic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=messageBody" })
  messageBody?: string;

  @SpeakeasyMetadata({ data: "json, name=messageSubject" })
  messageSubject?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=notificationEmails" })
  notificationEmails?: string[];

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=recipients", elemType: AddShareAddShareRequestBodyRecipients })
  recipients?: AddShareAddShareRequestBodyRecipients[];

  @SpeakeasyMetadata({ data: "json, name=requireEmail" })
  requireEmail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resources" })
  resources?: string[];

  @SpeakeasyMetadata({ data: "json, name=sendingLocalFiles" })
  sendingLocalFiles?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: AddShareAddShareRequestBodyTypeEnum;
}


export class AddShareRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AddShareHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: AddShareAddShareRequestBody;
}


export class AddShareResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  shareResponse?: shared.ShareResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
