import { SpeakeasyBase } from "../../../internal/utils";
import { VerificationStatusEnum } from "./verificationstatusenum";
export declare class IdentityDkimAttributes extends SpeakeasyBase {
    dkimEnabled?: boolean;
    dkimTokens?: string[];
    dkimVerificationStatus?: VerificationStatusEnum;
}
