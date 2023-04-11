import { SpeakeasyBase } from "../../../internal/utils";
import { PartnerIntegrationStatusEnum } from "./partnerintegrationstatusenum";
export declare class UpdatePartnerStatusInputMessage extends SpeakeasyBase {
    accountId: string;
    clusterIdentifier: string;
    databaseName: string;
    partnerName: string;
    status: PartnerIntegrationStatusEnum;
    statusMessage?: string;
}
