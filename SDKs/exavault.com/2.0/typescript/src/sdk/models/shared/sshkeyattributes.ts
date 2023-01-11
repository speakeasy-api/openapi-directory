import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SshKeyAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=lastLogin" })
  lastLogin?: Date;
}
