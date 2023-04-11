import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Order Type - the type of the order (L = LIMIT, MOC = MARKET_ON_CLOSE, LOC = LIMIT_ON_CLOSE)
 */
export declare enum OrderOtEnum {
    L = "L",
    Loc = "LOC",
    Moc = "MOC"
}
/**
 * Persistence Type - whether the order will persist at in play or not (L = LAPSE, P = PERSIST, MOC = Market On Close)
 */
export declare enum OrderPtEnum {
    L = "L",
    P = "P",
    Moc = "MOC"
}
/**
 * Side - the side of the order. For Line markets a 'B' bet refers to a SELL line and an 'L' bet refers to a BUY line.
 */
export declare enum OrderSideEnum {
    B = "B",
    L = "L"
}
/**
 * Status - the status of the order (E = EXECUTABLE, EC = EXECUTION_COMPLETE)
 */
export declare enum OrderStatusEnum {
    E = "E",
    Ec = "EC"
}
export declare class Order extends SpeakeasyBase {
    /**
     * Average Price Matched - the average price the order was matched at (null if the order is not matched). This value is not meaningful for activity on Line markets and is not guaranteed to be returned or maintained for these markets.
     */
    avp?: number;
    /**
     * BSP Liability - the BSP liability of the order (null if the order is not a BSP order)
     */
    bsp?: number;
    /**
     * Cancelled Date - the date the order was cancelled (null if the order is not cancelled)
     */
    cd?: number;
    /**
     * Bet Id - the id of the order
     */
    id?: string;
    /**
     * Lapsed Date - the date the order was lapsed (null if the order is not lapsed)
     */
    ld?: number;
    /**
     * Lapse Status Reason Code - the reason that some or all of this order has been lapsed (null if no portion of the order is lapsed
     */
    lsrc?: string;
    /**
     * Matched Date - the date the order was matched (null if the order is not matched)
     */
    md?: number;
    /**
     * Order Type - the type of the order (L = LIMIT, MOC = MARKET_ON_CLOSE, LOC = LIMIT_ON_CLOSE)
     */
    ot?: OrderOtEnum;
    /**
     * Price - the original placed price of the order. Line markets operate at even-money odds of 2.0. However, price for these markets refers to the line positions available as defined by the markets min-max range and interval steps
     */
    p?: number;
    /**
     * Placed Date - the date the order was placed
     */
    pd?: number;
    /**
     * Persistence Type - whether the order will persist at in play or not (L = LAPSE, P = PERSIST, MOC = Market On Close)
     */
    pt?: OrderPtEnum;
    /**
     * Regulator Auth Code - the auth code returned by the regulator
     */
    rac?: string;
    /**
     * Regulator Code - the regulator of the order
     */
    rc?: string;
    /**
     * Order Reference - the customer's order reference for this order (empty string if one was not set)
     */
    rfo?: string;
    /**
     * Strategy Reference - the customer's strategy reference for this order (empty string if one was not set)
     */
    rfs?: string;
    /**
     * Size - the original placed size of the order
     */
    s?: number;
    /**
     * Size Cancelled - the amount of the order that has been cancelled
     */
    sc?: number;
    /**
     * Side - the side of the order. For Line markets a 'B' bet refers to a SELL line and an 'L' bet refers to a BUY line.
     */
    side?: OrderSideEnum;
    /**
     * Size Lapsed - the amount of the order that has been lapsed
     */
    sl?: number;
    /**
     * Size Matched - the amount of the order that has been matched
     */
    sm?: number;
    /**
     * Size Remaining - the amount of the order that is remaining unmatched
     */
    sr?: number;
    /**
     * Status - the status of the order (E = EXECUTABLE, EC = EXECUTION_COMPLETE)
     */
    status?: OrderStatusEnum;
    /**
     * Size Voided - the amount of the order that has been voided
     */
    sv?: number;
}
