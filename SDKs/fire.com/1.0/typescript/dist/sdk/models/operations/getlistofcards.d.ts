import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * card provider
 */
export declare enum GetListofCardsCardsCardProviderEnum {
    Mastercard = "MASTERCARD"
}
/**
 * card status
 */
export declare enum GetListofCardsCardsCardStatusEnum {
    Live = "LIVE",
    CreatedActive = "CREATED_ACTIVE",
    CreatedInactive = "CREATED_INACTIVE",
    Deactivated = "DEACTIVATED"
}
/**
 * reason for card status
 */
export declare enum GetListofCardsCardsCardStatusReasonEnum {
    LostCard = "LOST_CARD",
    StolenCard = "STOLEN_CARD",
    CardDestroyed = "CARD_DESTROYED"
}
export declare class GetListofCardsCardsCard extends SpeakeasyBase {
    /**
     * Whether the card is blocked or not
     */
    blocked?: boolean;
    /**
     * card id assigned by fire.com
     */
    cardId?: number;
    /**
     * The date-time the card was created
     */
    dateCreated?: Date;
    /**
     * card user email address
     */
    emailAddress?: string;
    /**
     * identifier for the eur fire.com account (assigned by fire.com)
     */
    eurIcan?: number;
    /**
     * card expiry date
     */
    expiryDate?: Date;
    /**
     * card user first name
     */
    firstName?: string;
    /**
     * identifier for the gbp fire.com account (assigned by fire.com)
     */
    gbpIcan?: number;
    /**
     * card user last name
     */
    lastName?: string;
    /**
     * card number (masked)
     */
    maskedPan?: string;
    /**
     * card provider
     */
    provider?: GetListofCardsCardsCardProviderEnum;
    /**
     * card status
     */
    status?: GetListofCardsCardsCardStatusEnum;
    /**
     * reason for card status
     */
    statusReason?: GetListofCardsCardsCardStatusReasonEnum;
    /**
     * card user id assigned by fire.com
     */
    userId?: number;
}
/**
 * Successful response
 */
export declare class GetListofCardsCards extends SpeakeasyBase {
    cards?: GetListofCardsCardsCard[];
}
export declare class GetListofCardsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    cards?: GetListofCardsCards;
}
