import { SpeakeasyBase } from "../../../internal/utils";
import { VerificationStatusEnum } from "./verificationstatusenum";
export declare class IdentityVerificationAttributes extends SpeakeasyBase {
    verificationStatus?: VerificationStatusEnum;
    verificationToken?: string;
}
