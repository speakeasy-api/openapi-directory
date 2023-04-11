import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TokensPartnerOfferHistoryResponseMembershipTypeEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Ten = "10",
    TwoHundredAndFiftyFour = "254",
    Minus1 = "-1"
}
export declare class TokensPartnerOfferHistoryResponse extends SpeakeasyBase {
    applyDate?: Date;
    isConsumable?: boolean;
    localizedDescription?: string;
    localizedName?: string;
    membershipId?: number;
    membershipType?: TokensPartnerOfferHistoryResponseMembershipTypeEnum;
    partnerOfferKey?: string;
    quantityApplied?: number;
}
