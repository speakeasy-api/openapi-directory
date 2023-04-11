import { SpeakeasyBase } from "../../../internal/utils";
export declare class SendSSHPublicKeyRequest extends SpeakeasyBase {
    availabilityZone?: string;
    instanceId: string;
    instanceOSUser: string;
    sshPublicKey: string;
}
