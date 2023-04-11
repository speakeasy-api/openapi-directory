import { SpeakeasyBase } from "../../../internal/utils";
import { TokensPartnerOfferSkuHistoryResponse } from "./tokenspartnerofferskuhistoryresponse";
import { TokensTwitchDropHistoryResponse } from "./tokenstwitchdrophistoryresponse";
export declare class TokensPartnerRewardHistoryResponse extends SpeakeasyBase {
    partnerOffers?: TokensPartnerOfferSkuHistoryResponse[];
    twitchDrops?: TokensTwitchDropHistoryResponse[];
}
