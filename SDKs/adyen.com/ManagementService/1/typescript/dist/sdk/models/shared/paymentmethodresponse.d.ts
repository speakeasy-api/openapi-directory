import { SpeakeasyBase } from "../../../internal/utils";
import { PaginationLinks } from "./paginationlinks";
import { PaymentMethod } from "./paymentmethod";
export declare enum PaymentMethodResponseTypesWithErrorsEnum {
    Afterpaytouch = "afterpaytouch",
    Alipay = "alipay",
    AlipayHk = "alipay_hk",
    Amex = "amex",
    Applepay = "applepay",
    Bcmc = "bcmc",
    Blik = "blik",
    Cartebancaire = "cartebancaire",
    Clearpay = "clearpay",
    Cup = "cup",
    Diners = "diners",
    DirectEbanking = "directEbanking",
    DirectdebitGB = "directdebit_GB",
    Discover = "discover",
    EbankingFI = "ebanking_FI",
    EftposAustralia = "eftpos_australia",
    Elo = "elo",
    Elocredit = "elocredit",
    Elodebit = "elodebit",
    Girocard = "girocard",
    Giropay = "giropay",
    Googlepay = "googlepay",
    Hiper = "hiper",
    Hipercard = "hipercard",
    Ideal = "ideal",
    InteracCard = "interac_card",
    Jcb = "jcb",
    Klarna = "klarna",
    KlarnaAccount = "klarna_account",
    KlarnaPaynow = "klarna_paynow",
    Maestro = "maestro",
    Mbway = "mbway",
    Mc = "mc",
    Mcdebit = "mcdebit",
    MealVoucherFR = "mealVoucher_FR",
    Mobilepay = "mobilepay",
    Multibanco = "multibanco",
    OnlineBankingPL = "onlineBanking_PL",
    Paypal = "paypal",
    Payshop = "payshop",
    Swish = "swish",
    Trustly = "trustly",
    Vipps = "vipps",
    Visa = "visa",
    Visadebit = "visadebit",
    Vpay = "vpay",
    Wechatpay = "wechatpay",
    WechatpayPos = "wechatpay_pos"
}
/**
 * OK - the request has succeeded.
 */
export declare class PaymentMethodResponse extends SpeakeasyBase {
    links?: PaginationLinks;
    /**
     * Payment methods details.
     */
    data?: PaymentMethod[];
    /**
     * Total number of items.
     */
    itemsTotal: number;
    /**
     * Total number of pages.
     */
    pagesTotal: number;
    /**
     * Payment method types with errors.
     */
    typesWithErrors?: PaymentMethodResponseTypesWithErrorsEnum[];
}
