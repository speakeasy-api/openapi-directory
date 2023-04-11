import { SpeakeasyBase } from "../../../internal/utils";
import { AgreementStatusTypeEnum } from "./agreementstatustypeenum";
import { Tag } from "./tag";
export declare class CreateAgreementRequest extends SpeakeasyBase {
    accessRole: string;
    baseDirectory: string;
    description?: string;
    localProfileId: string;
    partnerProfileId: string;
    serverId: string;
    status?: AgreementStatusTypeEnum;
    tags?: Tag[];
}
