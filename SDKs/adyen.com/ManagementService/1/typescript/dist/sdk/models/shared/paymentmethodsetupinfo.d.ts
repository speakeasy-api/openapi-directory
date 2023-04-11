import { SpeakeasyBase } from "../../../internal/utils";
import { ApplePayInfo } from "./applepayinfo";
import { BcmcInfo } from "./bcmcinfo";
import { CartesBancairesInfo } from "./cartesbancairesinfo";
import { GiroPayInfo } from "./giropayinfo";
import { GooglePayInfo } from "./googlepayinfo";
import { KlarnaInfo } from "./klarnainfo";
import { MealVoucherFRInfo } from "./mealvoucherfrinfo";
import { PayPalInfo } from "./paypalinfo";
import { SofortInfo } from "./sofortinfo";
import { SwishInfo } from "./swishinfo";
import { VippsInfo } from "./vippsinfo";
/**
 * The sales channel. Required if the merchant account does not have a sales channel. When you provide this field, it overrides the default sales channel set on the merchant account.
 *
 * @remarks
 *
 * Possible values: **eCommerce**, **pos**, **contAuth**, and **moto**.
 */
export declare enum PaymentMethodSetupInfoShopperInteractionEnum {
    ECommerce = "eCommerce",
    Pos = "pos",
    Moto = "moto",
    ContAuth = "contAuth"
}
/**
 * Payment method [variant](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api).
 */
export declare enum PaymentMethodSetupInfoTypeEnum {
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
export declare class PaymentMethodSetupInfo extends SpeakeasyBase {
    applePay?: ApplePayInfo;
    bcmc?: BcmcInfo;
    /**
     * The unique identifier of the business line.
     */
    businessLineId?: string;
    cartesBancaires?: CartesBancairesInfo;
    /**
     * The list of countries where a payment method is available. By default, all countries supported by the payment method.
     */
    countries?: string[];
    /**
     * The list of currencies that a payment method supports. By default, all currencies supported by the payment method.
     */
    currencies?: string[];
    /**
     * The list of custom routing flags to route payment to the intended acquirer.
     */
    customRoutingFlags?: string[];
    giroPay?: GiroPayInfo;
    googlePay?: GooglePayInfo;
    klarna?: KlarnaInfo;
    mealVoucherFR?: MealVoucherFRInfo;
    paypal?: PayPalInfo;
    /**
     * Your reference for the payment method. Supported characters a-z, A-Z, 0-9.
     */
    reference?: string;
    /**
     * The sales channel. Required if the merchant account does not have a sales channel. When you provide this field, it overrides the default sales channel set on the merchant account.
     *
     * @remarks
     *
     * Possible values: **eCommerce**, **pos**, **contAuth**, and **moto**.
     */
    shopperInteraction?: PaymentMethodSetupInfoShopperInteractionEnum;
    sofort?: SofortInfo;
    /**
     * The ID of the [store](https://docs.adyen.com/api-explorer/#/ManagementService/latest/post/stores__resParam_id), if any.
     */
    storeId?: string;
    swish?: SwishInfo;
    /**
     * Payment method [variant](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api).
     */
    type?: PaymentMethodSetupInfoTypeEnum;
    vipps?: VippsInfo;
}
