import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MarketDataFilterFieldsEnum {
    ExBestOffersDisp = "EX_BEST_OFFERS_DISP",
    ExBestOffers = "EX_BEST_OFFERS",
    ExAllOffers = "EX_ALL_OFFERS",
    ExTraded = "EX_TRADED",
    ExTradedVol = "EX_TRADED_VOL",
    ExLtp = "EX_LTP",
    ExMarketDef = "EX_MARKET_DEF",
    SpTraded = "SP_TRADED",
    SpProjected = "SP_PROJECTED"
}
export declare class MarketDataFilter extends SpeakeasyBase {
    fields?: MarketDataFilterFieldsEnum[];
    ladderLevels?: number;
}
