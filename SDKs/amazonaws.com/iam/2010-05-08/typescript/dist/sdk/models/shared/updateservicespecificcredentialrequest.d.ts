import { SpeakeasyBase } from "../../../internal/utils";
import { StatusTypeEnum } from "./statustypeenum";
export declare class UpdateServiceSpecificCredentialRequest extends SpeakeasyBase {
    serviceSpecificCredentialId: string;
    status: StatusTypeEnum;
    userName?: string;
}
