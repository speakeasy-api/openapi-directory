import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TokensTwitchDropHistoryResponseClaimStateEnum {
    Zero = "0",
    One = "1",
    Two = "2"
}
export declare class TokensTwitchDropHistoryResponse extends SpeakeasyBase {
    claimState?: TokensTwitchDropHistoryResponseClaimStateEnum;
    createdAt?: Date;
    description?: string;
    title?: string;
}
