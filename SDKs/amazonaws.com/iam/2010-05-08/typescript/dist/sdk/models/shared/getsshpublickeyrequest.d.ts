import { SpeakeasyBase } from "../../../internal/utils";
import { EncodingTypeEnum } from "./encodingtypeenum";
export declare class GetSSHPublicKeyRequest extends SpeakeasyBase {
    encoding: EncodingTypeEnum;
    sshPublicKeyId: string;
    userName: string;
}
