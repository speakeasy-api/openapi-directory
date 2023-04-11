import { SpeakeasyBase } from "../../../internal/utils";
import { AgreementStatusTypeEnum } from "./agreementstatustypeenum";
import { Tag } from "./tag";
/**
 * Describes the properties of an agreement.
 */
export declare class DescribedAgreement extends SpeakeasyBase {
    accessRole?: string;
    agreementId?: string;
    arn: string;
    baseDirectory?: string;
    description?: string;
    localProfileId?: string;
    partnerProfileId?: string;
    serverId?: string;
    status?: AgreementStatusTypeEnum;
    tags?: Tag[];
}
