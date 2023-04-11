import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum CreateNewCardNewCardAddressTypeEnum {
    Home = "HOME",
    Business = "BUSINESS"
}
/**
 * Details of the new card
 */
export declare class CreateNewCardNewCard extends SpeakeasyBase {
    acceptFeesAndCharges?: boolean;
    addressType?: CreateNewCardNewCardAddressTypeEnum;
    cardPin?: string;
    eurIcan?: number;
    gbpIcan?: number;
    userId?: number;
}
export declare enum CreateNewCardNewCardResponseStatusEnum {
    CreatedActive = "CREATED_ACTIVE",
    CreatedInactive = "CREATED_INACTIVE"
}
/**
 * Card created successfully
 */
export declare class CreateNewCardNewCardResponse extends SpeakeasyBase {
    cardId?: number;
    expiryDate?: Date;
    maskedPan?: string;
    status?: CreateNewCardNewCardResponseStatusEnum;
}
export declare class CreateNewCardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Card created successfully
     */
    newCardResponse?: CreateNewCardNewCardResponse;
}
