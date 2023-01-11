import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SessionActivityEntryAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bytesTransferred" })
  bytesTransferred?: number;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=fileName" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=fileSource" })
  fileSource?: string;

  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}

export enum SessionActivityEntryTypeEnum {
    SessionActivity = "sessionActivity"
}


// SessionActivityEntry
/** 
 * Single entry of session activity
**/
export class SessionActivityEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: SessionActivityEntryAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SessionActivityEntryTypeEnum;
}
