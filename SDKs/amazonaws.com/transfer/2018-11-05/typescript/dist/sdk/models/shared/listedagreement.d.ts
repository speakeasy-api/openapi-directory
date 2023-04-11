import { SpeakeasyBase } from "../../../internal/utils";
import { AgreementStatusTypeEnum } from "./agreementstatustypeenum";
/**
 * Describes the properties of an agreement.
 */
export declare class ListedAgreement extends SpeakeasyBase {
    agreementId?: string;
    arn?: string;
    description?: string;
    localProfileId?: string;
    partnerProfileId?: string;
    serverId?: string;
    status?: AgreementStatusTypeEnum;
}
