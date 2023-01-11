import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SshKeyAttributes } from "./sshkeyattributes";



export class SshKeyRelationshipsOwnerUserData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class SshKeyRelationshipsOwnerUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: SshKeyRelationshipsOwnerUserData;
}


export class SshKeyRelationships extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ownerUser" })
  ownerUser?: SshKeyRelationshipsOwnerUser;
}

export enum SshKeyTypeEnum {
    SshKey = "sshKey"
}


// SshKey
/** 
 * Object representing an SSH Key associated with a user.
**/
export class SshKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: SshKeyAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships?: SshKeyRelationships;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SshKeyTypeEnum;
}
