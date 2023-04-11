import { SpeakeasyBase } from "../../../internal/utils";
import { StatusTypeEnum } from "./statustypeenum";
export declare class UpdateSigningCertificateRequest extends SpeakeasyBase {
    certificateId: string;
    status: StatusTypeEnum;
    userName?: string;
}
