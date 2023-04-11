import { SpeakeasyBase } from "../../../internal/utils";
import { AcceptanceTypeEnum } from "./acceptancetypeenum";
export declare class AcceptMatchInput extends SpeakeasyBase {
    acceptanceType: AcceptanceTypeEnum;
    playerIds: string[];
    ticketId: string;
}
