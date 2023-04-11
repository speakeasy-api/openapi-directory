import { SpeakeasyBase } from "../../../internal/utils";
import { RemediatingAction } from "./remediatingaction";
import { VerificationErrorRecursive } from "./verificationerrorrecursive";
export declare enum VerificationErrorCapabilitiesEnum {
    AcceptExternalFunding = "acceptExternalFunding",
    AcceptPspFunding = "acceptPspFunding",
    AcceptTransactionInRestrictedCountries = "acceptTransactionInRestrictedCountries",
    AcceptTransactionInRestrictedCountriesCommercial = "acceptTransactionInRestrictedCountriesCommercial",
    AcceptTransactionInRestrictedCountriesConsumer = "acceptTransactionInRestrictedCountriesConsumer",
    AcceptTransactionInRestrictedIndustries = "acceptTransactionInRestrictedIndustries",
    AcceptTransactionInRestrictedIndustriesCommercial = "acceptTransactionInRestrictedIndustriesCommercial",
    AcceptTransactionInRestrictedIndustriesConsumer = "acceptTransactionInRestrictedIndustriesConsumer",
    Acquiring = "acquiring",
    AtmWithdrawal = "atmWithdrawal",
    AtmWithdrawalCommercial = "atmWithdrawalCommercial",
    AtmWithdrawalConsumer = "atmWithdrawalConsumer",
    AtmWithdrawalInRestrictedCountries = "atmWithdrawalInRestrictedCountries",
    AtmWithdrawalInRestrictedCountriesCommercial = "atmWithdrawalInRestrictedCountriesCommercial",
    AtmWithdrawalInRestrictedCountriesConsumer = "atmWithdrawalInRestrictedCountriesConsumer",
    AuthorisedPaymentInstrumentUser = "authorisedPaymentInstrumentUser",
    GetGrantOffers = "getGrantOffers",
    IssueBankAccount = "issueBankAccount",
    IssueCard = "issueCard",
    IssueCardCommercial = "issueCardCommercial",
    IssueCardConsumer = "issueCardConsumer",
    LocalAcceptance = "localAcceptance",
    Payout = "payout",
    PayoutToTransferInstrument = "payoutToTransferInstrument",
    Processing = "processing",
    ReceiveFromBalanceAccount = "receiveFromBalanceAccount",
    ReceiveFromPlatformPayments = "receiveFromPlatformPayments",
    ReceiveFromThirdParty = "receiveFromThirdParty",
    ReceiveFromTransferInstrument = "receiveFromTransferInstrument",
    ReceiveGrants = "receiveGrants",
    ReceivePayments = "receivePayments",
    SendToBalanceAccount = "sendToBalanceAccount",
    SendToThirdParty = "sendToThirdParty",
    SendToTransferInstrument = "sendToTransferInstrument",
    ThirdPartyFunding = "thirdPartyFunding",
    UseCard = "useCard",
    UseCardCommercial = "useCardCommercial",
    UseCardConsumer = "useCardConsumer",
    UseCardInRestrictedCountries = "useCardInRestrictedCountries",
    UseCardInRestrictedCountriesCommercial = "useCardInRestrictedCountriesCommercial",
    UseCardInRestrictedCountriesConsumer = "useCardInRestrictedCountriesConsumer",
    UseCardInRestrictedIndustries = "useCardInRestrictedIndustries",
    UseCardInRestrictedIndustriesCommercial = "useCardInRestrictedIndustriesCommercial",
    UseCardInRestrictedIndustriesConsumer = "useCardInRestrictedIndustriesConsumer",
    WithdrawFromAtm = "withdrawFromAtm",
    WithdrawFromAtmCommercial = "withdrawFromAtmCommercial",
    WithdrawFromAtmConsumer = "withdrawFromAtmConsumer",
    WithdrawFromAtmInRestrictedCountries = "withdrawFromAtmInRestrictedCountries",
    WithdrawFromAtmInRestrictedCountriesCommercial = "withdrawFromAtmInRestrictedCountriesCommercial",
    WithdrawFromAtmInRestrictedCountriesConsumer = "withdrawFromAtmInRestrictedCountriesConsumer"
}
/**
 * The type of error.
 */
export declare enum VerificationErrorTypeEnum {
    DataMissing = "dataMissing",
    InvalidInput = "invalidInput",
    PendingStatus = "pendingStatus"
}
export declare class VerificationError extends SpeakeasyBase {
    /**
     * Contains key-value pairs that specify the actions that the legal entity can do in your platform. The key is a capability required for your integration. For example, **issueCard** for Issuing.The value is an object containing the settings for the capability.
     */
    capabilities?: VerificationErrorCapabilitiesEnum[];
    /**
     * The general error code.
     */
    code?: string;
    /**
     * The general error message.
     */
    message?: string;
    /**
     * An object containing possible solutions to fix a verification error.
     */
    remediatingActions?: RemediatingAction[];
    /**
     * An array containing more granular information about the cause of the verification error.
     */
    subErrors?: VerificationErrorRecursive[];
    /**
     * The type of error.
     */
    type?: VerificationErrorTypeEnum;
}
