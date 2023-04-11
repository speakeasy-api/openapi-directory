import { SpeakeasyBase } from "../../../internal/utils";
import { AgreementStatusTypeEnum } from "./agreementstatustypeenum";
export declare class UpdateAgreementRequest extends SpeakeasyBase {
    accessRole?: string;
    agreementId: string;
    baseDirectory?: string;
    description?: string;
    localProfileId?: string;
    partnerProfileId?: string;
    serverId: string;
    status?: AgreementStatusTypeEnum;
}
