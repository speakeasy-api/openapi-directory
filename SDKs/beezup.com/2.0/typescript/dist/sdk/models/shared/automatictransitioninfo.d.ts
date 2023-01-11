import { SpeakeasyBase } from "../../../internal/utils";
import { AutomaticTransitionInfoLinks } from "./automatictransitioninfolinks";
export declare class AutomaticTransitionInfo extends SpeakeasyBase {
    accountId: number;
    beezUPOrderStatus: string;
    businessOperationType: string;
    enabled: boolean;
    links?: AutomaticTransitionInfoLinks;
    marketplaceBusinessCode: string;
    marketplaceTechnicalCode: string;
    orderStatusTransitionId: number;
}
