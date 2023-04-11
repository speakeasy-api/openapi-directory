import { SpeakeasyBase } from "../../../internal/utils";
import { StatusTypeEnum } from "./statustypeenum";
export declare class UpdateSSHPublicKeyRequest extends SpeakeasyBase {
    sshPublicKeyId: string;
    status: StatusTypeEnum;
    userName: string;
}
